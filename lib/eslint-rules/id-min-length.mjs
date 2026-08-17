/** 한 글자 변수/파라미터명 금지
 *  (e) => ... → (event) => ...
 *  const v = ... → const value = ...
 *
 *  예외: for 루프의 i, j, _로 시작하는 무시 변수
 */
export const idMinLength = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Disallow single-character identifiers for readability' },
		messages: {
			tooShort: "'{{ name }}' 은(는) 너무 짧습니다. 의미 있는 이름을 사용하세요 (최소 2글자).",
		},
		schema: [
			{
				type: 'object',
				properties: {
					exceptions: {
						type: 'array',
						items: { type: 'string' },
					},
				},
				additionalProperties: false,
			},
		],
	},
	create(context) {
		const options = context.options[0] || {};
		const exceptions = new Set(options.exceptions || ['_', 'S']);

		/**
		 * 한 글자인지 확인 (_, __ 등 언더스코어 패턴은 허용)
		 */
		const isSingleChar = (name) => name.length === 1 && !exceptions.has(name);

		/**
		 * for (let i = ...) 같은 전통적 루프 인덱스는 허용
		 */
		const isForLoopIndex = (node) => {
			let parent = node.parent;
			// VariableDeclarator → VariableDeclaration → ForStatement
			if (parent && parent.type === 'VariableDeclarator') {
				parent = parent.parent;
			}
			if (parent && parent.type === 'VariableDeclaration') {
				parent = parent.parent;
			}
			return (
				parent &&
				(parent.type === 'ForStatement' || parent.type === 'ForInStatement' || parent.type === 'ForOfStatement')
			);
		};

		return {
			Identifier(node) {
				if (!isSingleChar(node.name)) return;

				const { parent } = node;
				if (!parent) return;

				// import 구문의 식별자는 외부 라이브러리가 정한 이름이므로 무시
				if (
					parent.type === 'ImportSpecifier' ||
					parent.type === 'ImportDefaultSpecifier' ||
					parent.type === 'ImportNamespaceSpecifier'
				) {
					return;
				}

				// 프로퍼티 접근 (obj.x)이나 프로퍼티 키 ({ x: value })는 무시
				if (parent.type === 'MemberExpression' && parent.property === node) return;
				if (parent.type === 'Property' && parent.key === node && !parent.computed) return;
				if (parent.type === 'TSPropertySignature' && parent.key === node) return;

				// for 루프 인덱스 허용 (i, j, k)
				if (['i', 'j', 'k'].includes(node.name) && isForLoopIndex(node)) return;

				// 선언 또는 파라미터인 경우만 검사
				const isDeclaration =
					(parent.type === 'VariableDeclarator' && parent.id === node) ||
					parent.type === 'FunctionDeclaration' ||
					parent.type === 'ArrowFunctionExpression' ||
					parent.type === 'FunctionExpression' ||
					parent.type === 'ArrayPattern' ||
					parent.type === 'ObjectPattern' ||
					parent.type === 'RestElement' ||
					(parent.type === 'AssignmentPattern' && parent.left === node);

				// 파라미터 목록 안의 식별자
				const isParam =
					parent.type === 'ArrowFunctionExpression' ||
					parent.type === 'FunctionExpression' ||
					parent.type === 'FunctionDeclaration';
				const isInParams = isParam && parent.params && parent.params.includes(node);

				if (isDeclaration || isInParams) {
					context.report({
						node,
						messageId: 'tooShort',
						data: { name: node.name },
					});
				}
			},
		};
	},
};
