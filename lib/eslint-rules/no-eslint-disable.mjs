/** eslint-disable 주석 사용 금지
 *  eslint-disable, eslint-disable-next-line, eslint-disable-line 모두 금지
 */
export const noEslintDisable = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow eslint-disable comments' },
		messages: {
			noDisable: 'eslint-disable 주석 사용이 금지되어 있습니다. 룰을 비활성화하지 말고 코드를 수정하세요.',
		},
	},
	create(context) {
		return {
			Program() {
				const sourceCode = context.sourceCode || context.getSourceCode();
				const comments = sourceCode.getAllComments();

				for (const comment of comments) {
					const value = comment.value.trim();
					if (/^eslint-disable/.test(value)) {
						context.report({
							loc: comment.loc,
							messageId: 'noDisable',
						});
					}
				}
			},
		};
	},
};
