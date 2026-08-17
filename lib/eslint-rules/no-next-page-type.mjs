/** NextPage 타입 사용 금지
 *  const MyPage: NextPage = () => ...  → ✗
 *  const MyPage = () => ...             → ✓
 *
 *  App Router에서는 NextPage 타입이 불필요합니다.
 *  페이지는 단순히 default export하는 함수 컴포넌트면 충분합니다.
 */
export const noNextPageType = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Disallow NextPage type annotation in App Router pages' },
		messages: {
			noNextPage:
				"'NextPage' 타입을 사용하지 마세요. App Router에서는 불필요합니다. 일반 함수 컴포넌트로 선언하세요.",
		},
	},
	create(context) {
		return {
			// import { NextPage } from 'next' 또는 import type { NextPage } from 'next'
			ImportSpecifier(node) {
				if (
					node.imported &&
					node.imported.name === 'NextPage' &&
					node.parent &&
					node.parent.source &&
					node.parent.source.value === 'next'
				) {
					context.report({
						node,
						messageId: 'noNextPage',
					});
				}
			},
			// 변수 선언에서 : NextPage 타입 어노테이션
			TSTypeReference(node) {
				if (node.typeName && node.typeName.type === 'Identifier' && node.typeName.name === 'NextPage') {
					context.report({
						node,
						messageId: 'noNextPage',
					});
				}
			},
		};
	},
};
