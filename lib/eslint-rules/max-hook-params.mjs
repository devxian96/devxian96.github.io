/** 커스텀 훅 파라미터 개수 제한 (기본 5개)
 *  const useMyHook = (a, b, c, d, e, f) => ... → ✗ (6개)
 *  const useMyHook = (a, b, c, d, e) => ...    → ✓ (5개)
 *
 *  객체 destructuring은 1개로 카운트 (권장 패턴)
 *  const useMyHook = ({ a, b, c, d, e, f }) => ... → ✓ (파라미터 1개)
 *
 *  옵션: { max: 5 }
 */
export const maxHookParams = {
	meta: {
		type: 'problem',
		docs: { description: 'Limit the number of parameters in custom hooks' },
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
			tooManyParams:
				'훅 "{{name}}"의 파라미터가 {{count}}개입니다 (최대 {{max}}개). 옵션 객체 패턴을 사용하세요.',
		},
	},
	create(context) {
		const max = (context.options[0] && context.options[0].max) || 5;

		/** use로 시작하는 커스텀 훅인지 확인 */
		const getHookName = (node) => {
			const { parent } = node;
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

		const checkParams = (node) => {
			const name = getHookName(node);
			if (!name) return;

			const count = node.params.length;
			if (count > max) {
				context.report({
					node,
					messageId: 'tooManyParams',
					data: { name, count: String(count), max: String(max) },
				});
			}
		};

		return {
			ArrowFunctionExpression: checkParams,
			FunctionExpression: checkParams,
		};
	},
};
