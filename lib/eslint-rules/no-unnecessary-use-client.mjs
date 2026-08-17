/** 불필요한 'use client' 금지 — hooks, 이벤트 핸들러, 브라우저 API, 클라이언트 전용 라이브러리가 없으면 에러 */
const CLIENT_ONLY_MODULES = new Set([
	'motion/react',
	'framer-motion',
	'@tanstack/react-query',
	'zustand',
	'zustand/middleware',
]);

export const noUnnecessaryUseClient = {
	meta: {
		type: 'problem',
		docs: {
			description: "Disallow 'use client' when no hooks, event handlers, or browser APIs are used",
		},
		messages: {
			unnecessary: "불필요한 'use client' — hooks, 이벤트 핸들러, 브라우저 API가 없으면 제거하세요.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();
		if (!/\.[jt]sx$/.test(filename)) return {};

		let hasUseClient = false;
		let useClientNode = null;
		let needsClient = false;

		return {
			ImportDeclaration(node) {
				if (needsClient) return;
				if (CLIENT_ONLY_MODULES.has(node.source.value)) {
					needsClient = true;
				}
			},
			ExpressionStatement(node) {
				if (
					node.expression.type === 'Literal' &&
					node.expression.value === 'use client' &&
					node.parent.type === 'Program' &&
					node.parent.body.indexOf(node) === 0
				) {
					hasUseClient = true;
					useClientNode = node;
				}
			},
			CallExpression(node) {
				if (needsClient) return;
				const { callee } = node;
				if (callee.type === 'Identifier' && /^use[A-Z]/.test(callee.name)) {
					needsClient = true;
					return;
				}
				if (
					callee.type === 'MemberExpression' &&
					callee.property.type === 'Identifier' &&
					/^use[A-Z]/.test(callee.property.name)
				) {
					needsClient = true;
					return;
				}
				if (
					callee.type === 'Identifier' &&
					/[Mm]odel|[Ss]tore/.test(callee.name) &&
					node.arguments.length > 0 &&
					node.arguments[0].type === 'ArrowFunctionExpression'
				) {
					needsClient = true;
				}
			},
			JSXAttribute(node) {
				if (needsClient) return;
				if (node.name.type === 'JSXIdentifier' && /^on[A-Z]/.test(node.name.name)) {
					needsClient = true;
				}
			},
			MemberExpression(node) {
				if (needsClient) return;
				if (
					node.object.type === 'Identifier' &&
					['window', 'document', 'navigator', 'localStorage', 'sessionStorage'].includes(node.object.name)
				) {
					needsClient = true;
				}
			},
			'Program:exit'() {
				if (hasUseClient && !needsClient) {
					context.report({ node: useClientNode, messageId: 'unnecessary' });
				}
			},
		};
	},
};
