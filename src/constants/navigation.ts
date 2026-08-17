export interface NavItem {
	label: string;
	href: string;
}

/** 홈의 서사 순서와 같은 순서로 둔다. 내비게이션이 곧 목차다. */
export const NAV_ITEMS: NavItem[] = [
	{ label: '만든 것', href: '/#work' },
	{ label: '지나온 길', href: '/#career' },
	{ label: '글', href: '/blog' },
	{ label: '소개', href: '/about' },
];
