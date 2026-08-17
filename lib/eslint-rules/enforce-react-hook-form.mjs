/** 폼 입력에 react-hook-form 사용 강제
 *  <input value={name} onChange={handleChange} />        → ✗ (수동 state 관리)
 *  <TextField value={name} onChange={handleChange} />    → ✗
 *  <input {...register('name')} />                       → ✓ (react-hook-form)
 *  <Controller name="name" control={control} ... />      → ✓
 *
 *  입력 컴포넌트에 value + onChange 조합을 직접 사용하면 안 됩니다.
 *  react-hook-form의 register 또는 Controller를 사용하세요.
 *
 *  예외: 검색창 등 폼이 아닌 단독 입력은 allowedComponents 옵션으로 허용할 수 있습니다.
 */
const INPUT_ELEMENTS = new Set([
	'input',
	'textarea',
	'select',
	'Input',
	'TextField',
	'Select',
	'Textarea',
	'TextareaAutosize',
]);

export const enforceReactHookForm = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Enforce react-hook-form for form input handling instead of manual value+onChange' },
		messages: {
			useRHF: "'{{ element }}'에 value+onChange를 직접 사용하지 마세요. react-hook-form의 register() 또는 Controller를 사용하세요.",
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowedComponents: {
						type: 'array',
						items: { type: 'string' },
						description: 'Component names where manual value+onChange is allowed (e.g. search inputs)',
					},
				},
				additionalProperties: false,
			},
		],
	},
	create(context) {
		const options = context.options[0] || {};
		const allowedComponents = new Set(options.allowedComponents || []);

		return {
			JSXOpeningElement(node) {
				// 엘리먼트 이름 추출
				const elementName =
					node.name.type === 'JSXIdentifier'
						? node.name.name
						: node.name.type === 'JSXMemberExpression' && node.name.property
							? node.name.property.name
							: null;

				if (!elementName) return;
				if (!INPUT_ELEMENTS.has(elementName)) return;
				if (allowedComponents.has(elementName)) return;

				const attrs = node.attributes || [];
				let hasValue = false;
				let hasOnChange = false;
				let hasRegisterSpread = false;

				for (const attr of attrs) {
					// {...register('name')} 패턴 감지 — react-hook-form 사용 중
					if (attr.type === 'JSXSpreadAttribute') {
						hasRegisterSpread = true;
						break;
					}

					if (attr.type !== 'JSXAttribute' || !attr.name) continue;
					const propName = attr.name.name;

					if (propName === 'value' || propName === 'defaultValue') hasValue = true;
					if (propName === 'onChange') hasOnChange = true;
				}

				// register spread가 있으면 react-hook-form 사용 중이므로 통과
				if (hasRegisterSpread) return;

				// value(또는 defaultValue) + onChange 조합이면 수동 관리로 판단
				if (hasValue && hasOnChange) {
					context.report({
						node,
						messageId: 'useRHF',
						data: { element: elementName },
					});
				}
			},
		};
	},
};
