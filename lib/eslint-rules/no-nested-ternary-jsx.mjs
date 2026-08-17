/** JSX 내 중첩 삼항연산자 금지
 *  {isA ? <A /> : isB ? <B /> : <C />}  → ✗
 *  {match(value).with(...).otherwise(...)} → ✓ (ts-pattern 사용)
 *  {isA ? <A /> : <B />}                 → ✓ (단일 삼항은 허용)
 *
 *  중첩 삼항은 가독성을 해칩니다. ts-pattern을 사용하세요.
 */
export const noNestedTernaryJsx = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow nested ternary expressions inside JSX' },
		messages: {
			noNestedTernary: 'JSX 내 중첩 삼항연산자를 사용하지 마세요. ts-pattern의 match().with()를 사용하세요.',
		},
	},
	create(context) {
		/** node가 JSX 컨텍스트 안에 있는지 확인 */
		const isInsideJsx = (node) => {
			let current = node.parent;
			while (current) {
				if (current.type === 'JSXExpressionContainer') return true;
				// JSX 속성 값도 JSX 컨텍스트로 간주
				if (current.type === 'JSXAttribute') return true;
				current = current.parent;
			}
			return false;
		};

		/** 삼항연산자 안에 또 다른 삼항연산자가 있는지 확인 */
		const hasNestedConditional = (node) => {
			if (node.type === 'ConditionalExpression') return true;
			return false;
		};

		return {
			ConditionalExpression(node) {
				if (!isInsideJsx(node)) return;

				// consequent 또는 alternate에 중첩 삼항이 있는지 확인
				const hasNestedInConsequent = hasNestedConditional(node.consequent);
				const hasNestedInAlternate = hasNestedConditional(node.alternate);

				if (hasNestedInConsequent || hasNestedInAlternate) {
					context.report({
						node,
						messageId: 'noNestedTernary',
					});
				}
			},
		};
	},
};
