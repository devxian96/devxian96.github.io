export interface StackGroup {
	category: string;
	items: string;
}

/** 이력서 기술스택 그대로. 써본 것이 아니라 실제로 굴려본 것만. */
export const STACK: StackGroup[] = [
	{
		category: 'Frontend',
		items: 'TypeScript · React · Next.js · Zustand · Recoil · TanStack Query · ts-pattern · Vite',
	},
	{ category: 'Design', items: 'shadcn/ui · Tailwind CSS · emotion · motion · MUI' },
	{ category: 'Backend', items: 'FastAPI · Hono · Express · NestJS · PHP · Prisma · Sequelize' },
	{ category: 'Database', items: 'MySQL · Oracle · PostgreSQL · MongoDB · Redis · InfluxDB' },
	{ category: 'Infra', items: 'AWS (EC2, RDS, Route53) · VPS · Firebase · GitHub Pages · Vercel · Docker' },
	{
		category: 'AI Engineering',
		items: 'Claude Code · Codex · Cursor · OpenAI · Claude · Gemini API · Google ADK · MCP · n8n',
	},
	{ category: 'Graphics', items: 'Canvas · SVG · Blob · WYSIWYG · Playwright' },
];
