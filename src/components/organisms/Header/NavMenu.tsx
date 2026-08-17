import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';

export const NavMenu = () => {
	return (
		<nav className="flex items-center gap-1">
			{NAV_ITEMS.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
};
