/** JSX 이벤트 핸들러에 인라인 함수 금지
 *  onChange={(event) => setValue(event.target.value)}  → ✗
 *  onChange={handleChange}                              → ✓
 *  onClick={() => setOpen(true)}                        → ✗
 *  onClick={handleOpen}                                 → ✓
 *
 *  인라인 화살표/함수는 리렌더링마다 새 참조를 생성하므로
 *  미리 선언된 핸들러 함수를 전달하도록 강제합니다.
 */
export const noInlineHandler = {
	meta: {
		type: 'suggestion',
		docs: { description: 'Disallow inline arrow functions and function expressions in JSX event handler props' },
		messages: {
			noInline: "'{{ prop }}' 에 인라인 함수를 사용하지 마세요. 별도의 핸들러 함수를 선언하고 참조를 전달하세요.",
		},
		schema: [
			{
				type: 'object',
				properties: {
					allowedProps: {
						type: 'array',
						items: { type: 'string' },
						description: 'Props where inline functions are allowed (e.g. render props)',
					},
				},
				additionalProperties: false,
			},
		],
	},
	create(context) {
		const options = context.options[0] || {};
		const allowedProps = new Set(options.allowedProps || []);

		/** on* 패턴의 이벤트 핸들러 prop인지 확인 */
		const isEventHandlerProp = (name) => /^on[A-Z]/.test(name);

		return {
			JSXExpressionContainer(node) {
				const { parent, expression } = node;

				// JSXAttribute 내부가 아니면 무시
				if (!parent || parent.type !== 'JSXAttribute') return;

				const propName = parent.name && parent.name.name;
				if (!propName) return;

				// 이벤트 핸들러 prop이 아니면 무시
				if (!isEventHandlerProp(propName)) return;

				// 허용 목록에 있으면 무시
				if (allowedProps.has(propName)) return;

				// 인라인 화살표 함수 또는 함수 표현식 감지
				if (expression.type === 'ArrowFunctionExpression' || expression.type === 'FunctionExpression') {
					context.report({
						node: expression,
						messageId: 'noInline',
						data: { prop: propName },
					});
				}
			},
		};
	},
};
