/** Props 타입 이름은 반드시 'Props'로 통일, interface만 허용 */
export const propsNaming = {
	meta: {
		type: 'problem',
		docs: { description: "Component props must use 'interface Props' (not type alias, not XxxProps)" },
		messages: {
			badName: "'{{ name }}' → 'Props'로 이름을 변경하세요. Props 타입은 항상 'Props'로 통일합니다.",
			useInterface: "'type Props'가 아닌 'interface Props'를 사용하세요.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();
		if (!/\.[jt]sx?$/.test(filename)) return {};
		if (!filename.includes('/src/components/')) return {};

		return {
			TSInterfaceDeclaration(node) {
				const { name } = node.id;
				if (name !== 'Props' && name.endsWith('Props')) {
					context.report({ node: node.id, messageId: 'badName', data: { name } });
				}
			},
			TSTypeAliasDeclaration(node) {
				const { name } = node.id;
				if (name !== 'Props' && name.endsWith('Props')) {
					context.report({ node: node.id, messageId: 'badName', data: { name } });
				}
				if (name === 'Props') {
					context.report({ node: node.id, messageId: 'useInterface' });
				}
			},
		};
	},
};
