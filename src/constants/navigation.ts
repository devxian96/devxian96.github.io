export interface NavItem {
	label: string;
	href: string;
}

/** 실제 페이지로만 연다. 같은 화면 안을 스크롤하는 앵커는 두지 않는다. */
export const NAV_ITEMS: NavItem[] = [
	{ label: '만든 것', href: '/work' },
	{ label: '지나온 길', href: '/career' },
	{ label: '글', href: '/blog' },
	{ label: '소개', href: '/about' },
];
