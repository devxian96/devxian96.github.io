/** 컴포넌트 Props는 반드시 interface Props로 선언
 *  ({ name, age }: { name: string; age: number }) => ...  → ✗ (인라인 타입)
 *  ({ name, age }: Props) => ...                           → ✓
 *
 *  type Props = { ... } 도 금지 — interface Props만 허용
 */
export const enforcePropsInterface = {
	meta: {
		type: 'problem',
		docs: { description: 'Enforce Props interface declaration for component parameters' },
		messages: {
			noInlineProps: '컴포넌트 Props를 인라인으로 선언하지 마세요. interface Props를 별도로 선언하세요.',
			useInterface: "Props 타입은 'type' 대신 'interface Props'로 선언하세요.",
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();

		// hooks, utils, constants 파일은 제외
		if (/\/(hooks|utils|constants|stores|apis)\//.test(filename)) return {};
		// .test, .spec, .stories 파일 제외
		if (/\.(test|spec|stories)\.[jt]sx?$/.test(filename)) return {};

		/** 화살표 함수가 JSX를 반환하는 컴포넌트인지 확인 */
		const isComponentFunction = (node) => {
			// 함수 이름이 대문자로 시작하는지 확인 (컴포넌트 컨벤션)
			const { parent } = node;
			if (parent && parent.type === 'VariableDeclarator' && parent.id.type === 'Identifier') {
				return /^[A-Z]/.test(parent.id.name);
			}
			return false;
		};

		/** 파라미터에 인라인 타입 어노테이션이 있는지 확인 */
		const hasInlineTypeAnnotation = (param) => {
			// ({ name }: { name: string }) 패턴
			if (
				param.typeAnnotation &&
				param.typeAnnotation.typeAnnotation &&
				param.typeAnnotation.typeAnnotation.type === 'TSTypeLiteral'
			) {
				return true;
			}
			return false;
		};

		return {
			// 인라인 Props 타입 감지
			ArrowFunctionExpression(node) {
				if (!isComponentFunction(node)) return;
				if (node.params.length === 0) return;

				const firstParam = node.params[0];
				if (hasInlineTypeAnnotation(firstParam)) {
					context.report({
						node: firstParam.typeAnnotation,
						messageId: 'noInlineProps',
					});
				}
			},

			// type Props = { ... } 사용 금지 — interface Props만 허용
			TSTypeAliasDeclaration(node) {
				if (
					node.id.type === 'Identifier' &&
					/Props$/.test(node.id.name) &&
					node.typeAnnotation &&
					node.typeAnnotation.type === 'TSTypeLiteral'
				) {
					context.report({
						node,
						messageId: 'useInterface',
					});
				}
			},
		};
	},
};
