/** page.tsx에서 훅 사용 금지 — Template 컴포넌트를 import하는 얇은 레이어만 허용 */
export const noHooksInPage = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow hook usage in page.tsx – pages must be a thin layer importing Templates' },
		messages: {
			noHooksInPage:
				'page.tsx에서 훅 사용이 금지됩니다. Template 컴포넌트를 import하는 얇은 레이어만 허용됩니다.',
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();
		if (!filename.endsWith('/page.tsx') && !filename.endsWith('\\page.tsx')) {
			return {};
		}

		return {
			CallExpression(node) {
				if (node.callee.type === 'Identifier' && /^use[A-Z]/.test(node.callee.name)) {
					context.report({ node, messageId: 'noHooksInPage' });
				}
			},
		};
	},
};
