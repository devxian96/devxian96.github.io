export interface StackGroup {
	category: string;
	items: string;
}

export const STACK: StackGroup[] = [
	{ category: 'Language', items: 'TypeScript · JavaScript · PHP · Python' },
	{ category: 'Frontend', items: 'React · Next.js · Vue · Nuxt · Tailwind CSS' },
	{ category: 'Backend', items: 'Node.js · Express · Flask · Redis · MySQL' },
	{ category: 'Graphics', items: 'Canvas · SVG · Blob · WebGL' },
	{ category: 'Tooling', items: 'pnpm · ESLint · Docker · GitHub Actions · Figma' },
];
