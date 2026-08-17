import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettier from 'eslint-plugin-prettier';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';
import { localPlugin } from './lib/eslint-rules/index.mjs';

const eslintConfig = defineConfig([
	...nextVitals,
	{
		plugins: {
			prettier,
			'@typescript-eslint': tseslint,
			'better-tailwindcss': betterTailwindcss,
			local: localPlugin,
		},
		languageOptions: {
			parser: tsparser,
		},
		settings: {
			'better-tailwindcss': {
				entryPoint: 'src/styles/globals.css',
			},
		},
		rules: {
			'linebreak-style': 'off',
			'no-alert': 'error',
			'import/prefer-default-export': 'off',
			'prettier/prettier': 'off',
			'import/extensions': 'off',
			'no-use-before-define': 'off',
			'import/no-unresolved': 'off',
			'import/no-extraneous-dependencies': 'off',
			'no-shadow': 'off',
			'react/require-default-props': 'off',
			'no-param-reassign': 'off',
			'react/prop-types': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/no-unknown-property': ['error', { ignore: ['css'] }],
			'react/function-component-definition': [
				'error',
				{
					namedComponents: 'arrow-function',
					unnamedComponents: 'arrow-function',
				},
			],
			'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
			'jsx-a11y/no-noninteractive-element-interactions': 'off',
			'react-hooks/incompatible-library': 'off',

			// TypeScript 엄격 규칙
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
			'no-console': ['error', { allow: ['warn', 'error'] }],
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],

			// 경로 alias 강제 (2단계 이상 상위 디렉토리 접근 시 @/ 사용)
			'no-restricted-imports': [
				'error',
				{
					patterns: [
						{
							group: ['../../*'],
							message: '@/ path alias를 사용하세요.',
						},
					],
				},
			],
			'no-restricted-syntax': [
				'error',
				{
					selector: 'ImportNamespaceSpecifier',
					message: 'import * as X 형태의 namespace import는 금지입니다. named import를 사용하세요.',
				},
			],

			// 커스텀 룰 — 팀 리뷰 반복 지적사항 방지
			'local/no-barrel-files': 'error',
			'local/no-unnecessary-use-client': 'error',
			'local/props-naming': 'error',

			// DDD 컴포넌트 아키텍처 강제
			'local/ddd-hook-restriction': 'error',
			'local/ddd-import-hierarchy': 'error',

			// 코드 스타일 강제
			'local/no-react-namespace': 'error',
			'local/no-children-prop': 'error',
			'local/no-box-component': 'error',
			'local/no-excessive-sx': 'error',
			'local/no-hooks-in-page': 'error',
			'local/styled-object-naming': 'error',

			// 코드 품질 강제
			'local/id-min-length': 'error',
			'local/no-inline-handler': 'error',
			'local/no-next-page-type': 'error',
			'local/ts-pattern-jsx-only': 'error',
			'local/no-nested-ternary-jsx': 'error',
			'local/enforce-react-hook-form': 'error',
			'local/no-static-array-map': 'error',
			'local/enforce-props-interface': 'error',
			'local/one-component-per-file': 'error',

			// 슈퍼 컴포넌트/훅 방지 (최대 5개)
			'local/max-props': 'error',
			'local/max-hook-params': 'error',
			// 슈퍼훅 방지 — 훅 반환값 30개 초과 금지 (책임별 하위 훅으로 분해 유도)
			'local/no-super-hook': ['error', { max: 30 }],

			'local/no-eslint-disable': 'error',

			// Tailwind CSS 품질 강제
			'better-tailwindcss/enforce-consistent-class-order': 'error',
			'better-tailwindcss/enforce-consistent-important-position': 'error',
			'better-tailwindcss/enforce-consistent-variable-syntax': 'error',
			'better-tailwindcss/enforce-shorthand-classes': 'error',
			'better-tailwindcss/enforce-canonical-classes': 'error',
			'better-tailwindcss/no-conflicting-classes': 'error',
			'better-tailwindcss/no-deprecated-classes': 'error',
			'better-tailwindcss/no-duplicate-classes': 'error',
			'better-tailwindcss/no-restricted-classes': 'error',
			'better-tailwindcss/no-unnecessary-whitespace': 'error',
			'better-tailwindcss/no-unknown-classes': [
				'error',
				{
					ignore: [
						// html 요소에 직접 붙이는 테마 클래스 — 변형(variant)이라 유틸리티로 등록되지 않는다.
						'dark',
						String.raw`animate-.*`,
						String.raw`fade-.*`,
						String.raw`slide-.*`,
						String.raw`zoom-.*`,
						String.raw`data-\[.*\]:.*`,
					],
				},
			],
		},
	},
	// shadcn/ui 자동생성 컴포넌트 — 구조적 룰 예외
	{
		files: ['src/components/atoms/**'],
		rules: {
			'local/no-react-namespace': 'off',
			'local/one-component-per-file': 'off',
			'local/ddd-hook-restriction': 'off',
			'local/no-unnecessary-use-client': 'off',
			'local/id-min-length': 'off',
			'local/props-naming': 'off',
			'no-restricted-syntax': 'off',
		},
	},
	globalIgnores([
		'.next/**',
		'out/**',
		'build/**',
		'next-env.d.ts',
		'node_modules/**',
		'.vscode/**',
		'.github/**',
		'.husky/**',
		'lib/eslint-rules/**',
		'src/components/atoms/**',
	]),
]);

export default eslintConfig;
