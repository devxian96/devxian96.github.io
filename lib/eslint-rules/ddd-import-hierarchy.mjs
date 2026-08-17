/** DDD 컴포넌트 import 계층 강제 (하위 → 상위 import 금지) */
export const dddImportHierarchy = {
	meta: {
		type: 'problem',
		docs: {
			description: 'Enforce DDD component import hierarchy (lower levels cannot import higher levels)',
		},
		messages: {
			invalidImport:
				"'{{ from }}' 레벨에서 '{{ to }}' 레벨을 import할 수 없습니다. 하위 레벨만 import 가능합니다.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();

		const levels = ['atoms', 'molecules', 'organisms', 'templates'];
		let currentLevel = -1;

		for (let i = 0; i < levels.length; i++) {
			if (filename.includes(`/components/${levels[i]}/`)) {
				currentLevel = i;
				break;
			}
		}

		if (currentLevel === -1) return {};

		return {
			ImportDeclaration(node) {
				const importPath = node.source.value;

				for (let i = currentLevel + 1; i < levels.length; i++) {
					if (importPath.includes(`/components/${levels[i]}/`)) {
						context.report({
							node,
							messageId: 'invalidImport',
							data: { from: levels[currentLevel], to: levels[i] },
						});
						break;
					}
				}
			},
		};
	},
};
