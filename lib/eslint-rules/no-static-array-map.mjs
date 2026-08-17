/** JSX에서 정적 배열을 .map()으로 렌더링하는 것을 금지
 *  const ITEMS = [{ id: 1, ... }, ...];
 *  {ITEMS.map((item) => <div>{item.name}</div>)}  → ✗
 *
 *  정적 데이터는 JSX로 직접 작성하거나,
 *  동적 데이터(API 응답 등)를 사용해야 합니다.
 *
 *  감지 조건:
 *  - 파일 최상위(모듈 스코프)에 const로 선언된 배열 리터럴
 *  - 해당 배열이 JSX 내에서 .map()으로 사용됨
 */
export const noStaticArrayMap = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Disallow .map() on static constant arrays in JSX' },
		messages: {
			noStaticMap:
				"정적 배열 '{{ name }}'을(를) .map()으로 렌더링하지 마세요. 정적 데이터는 JSX로 직접 작성하거나, 동적 데이터를 사용하세요.",
		},
	},
	create(context) {
		// 모듈 스코프에서 선언된 정적 배열 이름을 수집
		const staticArrays = new Set();

		/** 배열 리터럴의 요소가 모두 정적(리터럴/객체)인지 확인 */
		const isStaticArrayLiteral = (node) => {
			if (node.type !== 'ArrayExpression') return false;
			// 빈 배열은 무시
			if (node.elements.length === 0) return false;
			return node.elements.every((el) => {
				if (!el) return false;
				// 객체 리터럴, 문자열, 숫자 등 리터럴 값
				return el.type === 'ObjectExpression' || el.type === 'Literal' || el.type === 'TemplateLiteral';
			});
		};

		/** node가 JSX 컨텍스트 안에 있는지 확인 */
		const isInsideJsx = (node) => {
			let current = node.parent;
			while (current) {
				if (current.type === 'JSXExpressionContainer') return true;
				current = current.parent;
			}
			return false;
		};

		return {
			// 1단계: 모듈 스코프의 const 배열 리터럴 수집
			VariableDeclaration(node) {
				// 모듈 스코프(Program 직속)인지 확인
				if (node.parent.type !== 'Program') return;
				if (node.kind !== 'const') return;

				for (const declarator of node.declarations) {
					if (
						declarator.id.type === 'Identifier' &&
						declarator.init &&
						isStaticArrayLiteral(declarator.init)
					) {
						staticArrays.add(declarator.id.name);
					}

					// const X = [...] as const 패턴
					if (
						declarator.id.type === 'Identifier' &&
						declarator.init &&
						declarator.init.type === 'TSAsExpression' &&
						isStaticArrayLiteral(declarator.init.expression)
					) {
						staticArrays.add(declarator.id.name);
					}
				}
			},

			// 2단계: JSX 내에서 정적 배열.map() 호출 감지
			CallExpression(node) {
				if (!isInsideJsx(node)) return;

				const { callee } = node;
				if (
					callee.type === 'MemberExpression' &&
					callee.property.type === 'Identifier' &&
					callee.property.name === 'map' &&
					callee.object.type === 'Identifier' &&
					staticArrays.has(callee.object.name)
				) {
					context.report({
						node,
						messageId: 'noStaticMap',
						data: { name: callee.object.name },
					});
				}
			},
		};
	},
};
