export interface Work {
	name: string;
	reason: string;
	stack: string;
	href: string;
	logo?: string;
}

/** 없어서 직접 만든 것들. 순서는 "왜 만들었는지"가 선명한 순. */
export const WORKS: Work[] = [
	{
		name: 'phpExpress',
		reason: 'PHP엔 Express 같은 가벼운 REST 프레임워크가 없어서',
		stack: 'PHP',
		href: 'https://github.com/devxian96/phpExpress',
		logo: '/images/works/phpexpress.webp',
	},
	{
		name: 'neomo',
		reason: '뉴모피즘을 매번 손으로 그리기 싫어서',
		stack: 'CSS',
		href: 'https://github.com/neomorphism/neomo',
		logo: '/images/works/neomo.webp',
	},
	{
		name: 'react-global-components',
		reason: 'Vue엔 있는 글로벌 컴포넌트가 React엔 없어서',
		stack: 'JavaScript',
		href: 'https://github.com/devxian96/react-global-components',
	},
	{
		name: 'nsus',
		reason: 'useState만으로는 상태를 다 감당할 수 없어서',
		stack: 'TypeScript',
		href: 'https://github.com/devxian96/nsus',
	},
	{
		name: 'no-lib-club',
		reason: '라이브러리 없이 어디까지 되는지 궁금해서',
		stack: 'TypeScript',
		href: 'https://github.com/devxian96/no-lib-club',
	},
	{
		name: '@buzzle/bds',
		reason: '사이드 프로젝트에 새 사람이 와도 바로 붙을 수 있게',
		stack: 'React · MUI',
		href: 'https://www.npmjs.com/package/@buzzle/bds',
	},
];
