/** Box 컴포넌트 사용 금지 — Stack, div, 시맨틱 HTML 태그 사용 강제 */
export const noBoxComponent = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow MUI Box component, use Stack, div, or semantic HTML instead' },
		messages: {
			noBox: 'Box 컴포넌트 사용 금지 — <Stack>, <div>, 시맨틱 HTML 태그를 사용하세요.',
		},
	},
	create(context) {
		return {
			ImportDeclaration(node) {
				const source = node.source.value;
				if (source !== '@buzzle/bds' && source !== '@mui/material') return;

				for (const specifier of node.specifiers) {
					if (specifier.type === 'ImportSpecifier' && specifier.imported.name === 'Box') {
						context.report({ node: specifier, messageId: 'noBox' });
					}
				}
			},
		};
	},
};
