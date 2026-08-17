/** sx prop 속성 4개 이상 사용 금지 — styled 컴포넌트로 분리 유도 */
export const noExcessiveSx = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Disallow sx prop with 4+ properties, use styled components instead' },
		messages: {
			tooManySxProps: 'sx prop에 속성이 {{ count }}개 있습니다 (최대 3개). styled 컴포넌트로 분리하세요.',
		},
	},
	create(context) {
		const MAX_SX_PROPS = 3;

		return {
			JSXAttribute(node) {
				if (node.name.type !== 'JSXIdentifier' || node.name.name !== 'sx') return;

				const value = node.value;
				if (!value || value.type !== 'JSXExpressionContainer') return;

				const expr = value.expression;
				if (expr.type !== 'ObjectExpression') return;

				// SpreadElement 제외하고 실제 속성만 카운트
				const propCount = expr.properties.filter((prop) => prop.type !== 'SpreadElement').length;

				if (propCount > MAX_SX_PROPS) {
					context.report({
						node,
						messageId: 'tooManySxProps',
						data: { count: String(propCount) },
					});
				}
			},
		};
	},
};
