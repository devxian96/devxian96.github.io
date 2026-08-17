/** children prop 직접 선언 금지 — PropsWithChildren 사용 강제 */
export const noChildrenProp = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow declaring children prop directly, use PropsWithChildren instead' },
		messages: {
			usePropsWithChildren: "'children' prop을 직접 선언하지 마세요. PropsWithChildren<Props>를 사용하세요.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();
		if (!/\.[jt]sx?$/.test(filename)) return {};

		return {
			TSPropertySignature(node) {
				if (node.key.type === 'Identifier' && node.key.name === 'children') {
					context.report({ node, messageId: 'usePropsWithChildren' });
				}
			},
		};
	},
};
