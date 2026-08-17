'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS } from '@/constants/navigation';

export const NavMenu = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center">
			{NAV_ITEMS.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					// 하위 경로(/blog/글제목)에서도 상위 메뉴가 켜져 있어야 현재 위치를 알 수 있다.
					aria-current={pathname.startsWith(item.href) ? 'page' : undefined}
					className="rounded-md px-2 py-1.5 text-[13px] whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground aria-[current=page]:font-bold aria-[current=page]:text-foreground sm:px-3 sm:text-sm"
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
};
