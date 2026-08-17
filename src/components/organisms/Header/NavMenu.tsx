import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';

export const NavMenu = () => {
	return (
		<nav className="flex items-center">
			{NAV_ITEMS.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className="rounded-md px-2 py-1.5 text-[13px] whitespace-nowrap text-white/70 transition-colors group-data-[solid=true]/header:text-muted-foreground hover:text-white group-data-[solid=true]/header:hover:text-foreground sm:px-3 sm:text-sm"
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
};
