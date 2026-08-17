/** React.XXX namespace 사용 금지 — named import 강제
 *  React.ReactNode → import type { ReactNode } from 'react'
 *  React.useState → import { useState } from 'react'
 */
export const noReactNamespace = {
	meta: {
		type: 'problem',
		docs: { description: 'Disallow React.XXX namespace access, require named imports' },
		messages: {
			noNamespace:
				"'React.{{ member }}' 사용 금지 — named import를 사용하세요: import { {{ member }} } from 'react'",
		},
	},
	create(context) {
		return {
			// React.useState() 등 런타임 접근
			MemberExpression(node) {
				if (
					node.object.type === 'Identifier' &&
					node.object.name === 'React' &&
					node.property.type === 'Identifier'
				) {
					context.report({
						node,
						messageId: 'noNamespace',
						data: { member: node.property.name },
					});
				}
			},
			// React.ReactNode 등 타입 접근 (TSQualifiedName)
			TSQualifiedName(node) {
				if (node.left.type === 'Identifier' && node.left.name === 'React' && node.right.type === 'Identifier') {
					context.report({
						node,
						messageId: 'noNamespace',
						data: { member: node.right.name },
					});
				}
			},
		};
	},
};
