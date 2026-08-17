/** 슈퍼훅 방지 — 커스텀 훅이 반환하는 값 개수 제한 (기본 30개)
 *
 *  한 훅이 너무 많은 값을 반환하면 여러 책임이 뭉친 "슈퍼훅"이 된다.
 *  책임별로 응집 있는 하위 훅으로 분해하도록 유도한다.
 *
 *  export const useThing = () => {
 *    // ...
 *    return { a, b, c, ...31개 };  → ✗ (31개 > 30)
 *  };
 *
 *  분해:
 *  export const useThing = () => ({
 *    list: useThingList(),        // 그룹 객체로 묶으면 top-level 카운트가 준다
 *    selection: useThingSelection(),
 *  });
 *
 *  - 대상: 이름이 use[A-Z]로 시작하는 커스텀 훅
 *  - 카운트: 훅이 직접 반환하는 ObjectExpression의 top-level 프로퍼티 수
 *    (그룹 객체로 묶으면 그 객체는 1개로 카운트되므로 자연히 줄어든다)
 *  - 중첩 함수(콜백 등) 내부의 return은 세지 않는다 (가장 가까운 함수가 훅일 때만)
 *  - 옵션: { max: 30 }
 */
export const noSuperHook = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Prevent super-hooks by limiting the number of returned values in a custom hook' },
		schema: [
			{
				type: 'object',
				properties: {
					max: { type: 'integer', minimum: 1 },
				},
				additionalProperties: false,
			},
		],
		messages: {
			tooManyReturns:
				'훅 "{{name}}"이 값을 {{count}}개 반환합니다 (최대 {{max}}개). 책임별 하위 훅으로 분해하거나 그룹 객체로 묶으세요.',
		},
	},
	create(context) {
		const max = (context.options[0] && context.options[0].max) || 30;

		const isHookFunction = (fn) => {
			if (!fn) return null;
			// function useX() {}
			if (fn.type === 'FunctionDeclaration' && fn.id && /^use[A-Z]/.test(fn.id.name)) {
				return fn.id.name;
			}
			// const useX = () => {} | function expression
			const { parent } = fn;
			if (
				parent &&
				parent.type === 'VariableDeclarator' &&
				parent.id.type === 'Identifier' &&
				/^use[A-Z]/.test(parent.id.name)
			) {
				return parent.id.name;
			}
			return null;
		};

		const FUNCTION_TYPES = new Set(['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression']);

		/** 노드에서 가장 가까운 상위 함수 노드를 찾는다 */
		const getEnclosingFunction = (node) => {
			let current = node.parent;
			while (current) {
				if (FUNCTION_TYPES.has(current.type)) return current;
				current = current.parent;
			}
			return null;
		};

		const checkObjectReturn = (objectNode, hookName) => {
			const count = objectNode.properties.length;
			if (count > max) {
				context.report({
					node: objectNode,
					messageId: 'tooManyReturns',
					data: { name: hookName, count: String(count), max: String(max) },
				});
			}
		};

		return {
			// return { ... }
			ReturnStatement(node) {
				if (!node.argument || node.argument.type !== 'ObjectExpression') return;
				const hookName = isHookFunction(getEnclosingFunction(node));
				if (hookName) checkObjectReturn(node.argument, hookName);
			},
			// const useX = () => ({ ... })  (암시적 객체 반환)
			ArrowFunctionExpression(node) {
				if (node.body.type !== 'ObjectExpression') return;
				const hookName = isHookFunction(node);
				if (hookName) checkObjectReturn(node.body, hookName);
			},
		};
	},
};
