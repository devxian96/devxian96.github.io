/** ts-pattern의 match()는 JSX 내에서만 사용 가능
 *  const result = match(status).with(...).otherwise(...)  → ✗
 *  return <>{match(status).with(...).otherwise(...)}</>    → ✓
 *  <div>{match(status).with(...).otherwise(...)}</div>     → ✓
 *
 *  JSX 외부에서 패턴 매칭이 필요하면 if/switch 문을 사용하세요.
 */
export const tsPatternJsxOnly = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Restrict ts-pattern match() usage to JSX expressions only' },
		messages: {
			jsxOnly: "'match()'는 JSX 내에서만 사용하세요. JSX 외부에서는 if/switch 문을 사용하세요.",
		},
	},
	create(context) {
		/** node가 JSX 표현식 컨테이너 안에 있는지 확인 */
		const isInsideJsx = (node) => {
			let current = node.parent;
			while (current) {
				if (current.type === 'JSXExpressionContainer') return true;
				current = current.parent;
			}
			return false;
		};

		return {
			CallExpression(node) {
				// match() 호출 감지 — 직접 호출이거나 체인의 시작
				if (node.callee.type === 'Identifier' && node.callee.name === 'match') {
					// match()가 체인의 일부(.with/.otherwise/.exhaustive)인지 확인
					// 최상위 체인 호출에서만 검사 (중복 리포트 방지)
					let topChain = node;
					let parent = node.parent;
					while (
						parent &&
						parent.type === 'CallExpression' &&
						parent.callee &&
						parent.callee.type === 'MemberExpression' &&
						parent.callee.object === topChain
					) {
						topChain = parent;
						parent = parent.parent;
					}

					// 최상위 체인이 JSX 안에 있지 않으면 에러
					if (!isInsideJsx(topChain)) {
						context.report({
							node,
							messageId: 'jsxOnly',
						});
					}
				}
			},
		};
	},
};
