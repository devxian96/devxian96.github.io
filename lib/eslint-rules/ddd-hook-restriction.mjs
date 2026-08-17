/** DDD 컴포넌트 레벨별 hook 사용 제한
 *  - atoms: hooks 사용 금지
 *  - molecules: hooks 사용 금지 (React hooks는 반드시 커스텀 hook으로 추상화)
 *  - organisms: 추상화된 커스텀 hooks만 허용 (React/Next.js 순수 hooks 직접 사용 금지)
 *  - templates: hooks 사용 금지 (순수 composition)
 */

// React 순수 hooks + TanStack Query — 컴포넌트에서 직접 사용 금지 (추상화 필요)
// Next.js routing hooks (useRouter, usePathname 등)는 organism에서 직접 사용 허용
const rawHooks = new Set([
	// React core (useState 포함 — 모든 React hooks는 커스텀 hook으로 추상화 필요)
	'useState',
	'useEffect',
	'useLayoutEffect',
	'useCallback',
	'useMemo',
	'useRef',
	'useReducer',
	'useContext',
	'useImperativeHandle',
	'useDebugValue',
	'useDeferredValue',
	'useTransition',
	'useId',
	'useInsertionEffect',
	'useSyncExternalStore',
	// TanStack Query base (Orval 추상화 또는 커스텀 wrapper 사용)
	'useQuery',
	'useMutation',
	'useSuspenseQuery',
	'useInfiniteQuery',
	'useQueryClient',
]);

export const dddHookRestriction = {
	meta: {
		type: 'problem',
		docs: { description: 'Enforce hook usage restrictions per DDD component level' },
		messages: {
			noHooksInAtom: 'Atom 컴포넌트에서는 hooks를 사용할 수 없습니다. 순수 presentational 컴포넌트로 유지하세요.',
			restrictedHookInMolecule: "Molecule에서 '{{ hook }}' 사용 금지 — 커스텀 hook으로 추상화하세요.",
			rawHookInOrganism: "Organism에서 '{{ hook }}' 직접 사용 금지 — 커스텀 hook으로 추상화하세요.",
			noHooksInTemplate: 'Template에서는 hooks를 사용할 수 없습니다. 순수 composition 계층으로 유지하세요.',
		},
	},
	create(context) {
		const filename = context.filename || context.getFilename();

		let level = null;
		if (filename.includes('/components/atoms/')) level = 'atom';
		else if (filename.includes('/components/molecules/')) level = 'molecule';
		else if (filename.includes('/components/organisms/')) level = 'organism';
		else if (filename.includes('/components/templates/')) level = 'template';

		if (!level) return {};

		return {
			CallExpression(node) {
				const { callee } = node;
				let hookName = null;

				if (callee.type === 'Identifier' && /^use[A-Z]/.test(callee.name)) {
					hookName = callee.name;
				} else if (
					callee.type === 'MemberExpression' &&
					callee.property.type === 'Identifier' &&
					/^use[A-Z]/.test(callee.property.name)
				) {
					hookName = callee.property.name;
				} else if (
					callee.type === 'Identifier' &&
					/[Mm]odel|[Ss]tore/.test(callee.name) &&
					node.arguments.length > 0 &&
					node.arguments[0].type === 'ArrowFunctionExpression'
				) {
					hookName = callee.name;
				}

				if (!hookName) return;

				if (level === 'atom') {
					context.report({ node, messageId: 'noHooksInAtom' });
				} else if (level === 'molecule') {
					context.report({
						node,
						messageId: 'restrictedHookInMolecule',
						data: { hook: hookName },
					});
				} else if (level === 'organism') {
					if (rawHooks.has(hookName)) {
						context.report({
							node,
							messageId: 'rawHookInOrganism',
							data: { hook: hookName },
						});
					}
				} else if (level === 'template') {
					context.report({ node, messageId: 'noHooksInTemplate' });
				}
			},
		};
	},
};
