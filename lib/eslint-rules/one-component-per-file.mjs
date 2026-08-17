/** 파일당 하나의 컴포넌트만 허용
 *  export const Header = () => <div>...</div>;
 *  const GrowthIndicator = () => <div>...</div>;  → ✗ (같은 파일에 2개)
 *
 *  JSX를 반환하는 대문자 시작 화살표 함수를 컴포넌트로 간주합니다.
 */
export const oneComponentPerFile = {
	meta: {
		type: 'problem',
		docs: { description: 'Enforce one React component per file' },
		messages: {
			oneComponent: "파일에 컴포넌트가 2개 이상입니다. '{{ name }}'을(를) 별도 파일로 분리하세요.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();

		// hooks, utils, constants, stores 파일은 제외
		if (/\/(hooks|utils|constants|stores|apis)\//.test(filename)) return {};
		// .test, .spec, .stories 파일 제외
		if (/\.(test|spec|stories)\.[jt]sx?$/.test(filename)) return {};
		// page.tsx, layout.tsx는 제외 (Next.js 규칙)
		if (/\/(page|layout|loading|error|not-found)\.[jt]sx?$/.test(filename)) return {};

		const components = [];

		/** JSX를 반환하는지 재귀적으로 확인 */
		const returnsJsx = (node) => {
			if (!node) return false;

			// 직접 JSX 반환
			if (node.type === 'JSXElement' || node.type === 'JSXFragment') return true;

			// 괄호로 감싼 경우
			if (node.type === 'ParenthesizedExpression') return returnsJsx(node.expression);

			// 조건부 반환
			if (node.type === 'ConditionalExpression') {
				return returnsJsx(node.consequent) || returnsJsx(node.alternate);
			}

			// 논리 연산자
			if (node.type === 'LogicalExpression') {
				return returnsJsx(node.left) || returnsJsx(node.right);
			}

			return false;
		};

		/** 함수 body에서 JSX 반환 여부 확인 */
		const bodyReturnsJsx = (node) => {
			// () => <div /> 형태 (expression body)
			if (node.type !== 'BlockStatement') return returnsJsx(node);

			// () => { return <div /> } 형태
			for (const stmt of node.body) {
				if (stmt.type === 'ReturnStatement' && returnsJsx(stmt.argument)) {
					return true;
				}
			}
			return false;
		};

		return {
			// 화살표 함수 컴포넌트 감지
			VariableDeclaration(node) {
				// 모듈 스코프만 (중첩 함수 내부 무시)
				if (node.parent.type !== 'Program' && node.parent.type !== 'ExportNamedDeclaration') return;

				for (const declarator of node.declarations) {
					if (declarator.id.type === 'Identifier' && /^[A-Z]/.test(declarator.id.name) && declarator.init) {
						const init = declarator.init;
						// 화살표 함수인지 확인
						if (init.type === 'ArrowFunctionExpression' && bodyReturnsJsx(init.body)) {
							components.push({ name: declarator.id.name, node: declarator });
						}
					}
				}
			},

			// function 선언 컴포넌트 감지
			FunctionDeclaration(node) {
				if (node.parent.type !== 'Program' && node.parent.type !== 'ExportNamedDeclaration') return;
				if (node.id && /^[A-Z]/.test(node.id.name) && bodyReturnsJsx(node.body)) {
					components.push({ name: node.id.name, node });
				}
			},

			'Program:exit'() {
				if (components.length <= 1) return;

				// 두 번째 컴포넌트부터 에러 보고
				for (let idx = 1; idx < components.length; idx++) {
					context.report({
						node: components[idx].node,
						messageId: 'oneComponent',
						data: { name: components[idx].name },
					});
				}
			},
		};
	},
};
