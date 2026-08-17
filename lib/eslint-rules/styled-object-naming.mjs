/** 스타일 객체는 const S = { 스타일이름: { ... } } 구조 강제 */
export const styledObjectNaming = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Enforce const S = { styleName: {} } pattern for extracted style objects' },
		messages: {
			useStyledObject: '스타일 객체는 const S = { 스타일이름: { ... } } 구조를 사용하세요. (변수명: {{ name }})',
		},
	},
	create(context) {
		const STYLE_SUFFIXES = /(?:Styles?|Sx)$/;

		return {
			VariableDeclaration(node) {
				if (node.kind !== 'const') return;

				for (const declarator of node.declarations) {
					if (!declarator.id || declarator.id.type !== 'Identifier') continue;
					const name = declarator.id.name;

					// S 자체는 허용
					if (name === 'S') continue;

					// 스타일 관련 네이밍이 아니면 스킵
					if (!STYLE_SUFFIXES.test(name)) continue;

					let init = declarator.init;
					if (!init) continue;

					// as const 언래핑
					if (init.type === 'TSAsExpression') {
						init = init.expression;
					}

					if (init.type !== 'ObjectExpression') continue;

					context.report({
						node: declarator,
						messageId: 'useStyledObject',
						data: { name },
					});
				}
			},
		};
	},
};
