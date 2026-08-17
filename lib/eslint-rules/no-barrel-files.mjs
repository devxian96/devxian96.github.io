/** barrel file (index.ts re-export only) 금지 */
export const noBarrelFiles = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow barrel files (index.ts that only re-export)' },
		messages: {
			noBarrel: 'Barrel file 금지 — index.ts에서 re-export하지 마세요. 개별 파일에서 직접 import하세요.',
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();
		const basename = filename.split('/').pop() || '';

		if (!/^index\.[jt]sx?$/.test(basename)) return {};
		if (!filename.includes('/src/components/')) return {};

		let hasOwnCode = false;

		return {
			VariableDeclaration() {
				hasOwnCode = true;
			},
			FunctionDeclaration() {
				hasOwnCode = true;
			},
			ClassDeclaration() {
				hasOwnCode = true;
			},
			ExportNamedDeclaration(node) {
				if (node.declaration) hasOwnCode = true;
			},
			ExportDefaultDeclaration(node) {
				if (node.declaration && node.declaration.type !== 'Identifier') hasOwnCode = true;
			},
			'Program:exit'(node) {
				if (hasOwnCode) return;
				const hasReExports = node.body.some(
					(stmt) => stmt.type === 'ExportNamedDeclaration' || stmt.type === 'ExportAllDeclaration',
				);
				if (hasReExports) {
					context.report({ node, messageId: 'noBarrel' });
				}
			},
		};
	},
};
