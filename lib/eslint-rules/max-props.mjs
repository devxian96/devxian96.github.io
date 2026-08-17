/** 컴포넌트 Props 속성 개수 제한 (기본 5개)
 *  interface Props { a; b; c; d; e; f } → ✗ (6개)
 *  interface Props { a; b; c; d; e }    → ✓ (5개)
 *
 *  옵션: { max: 5 }
 */
export const maxProps = {
	meta: {
		type: 'problem',
		docs: { description: 'Limit the number of properties in component Props interface' },
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
			tooManyProps:
				'Props 속성이 {{count}}개입니다 (최대 {{max}}개). 컴포넌트를 분리하거나 관련 속성을 하나의 객체로 그룹화하세요.',
		},
	},
	create(context) {
		const max = (context.options[0] && context.options[0].max) || 5;

		return {
			TSInterfaceDeclaration(node) {
				if (!node.id || node.id.type !== 'Identifier') return;
				if (!/Props$/.test(node.id.name)) return;

				const count = node.body.body.length;
				if (count > max) {
					context.report({
						node: node.id,
						messageId: 'tooManyProps',
						data: { count: String(count), max: String(max) },
					});
				}
			},
		};
	},
};
