import Link from 'next/link';
import { NavMenu } from '@/components/organisms/Header/NavMenu';
import { ThemeToggle } from '@/components/organisms/Header/ThemeToggle';
import { PROFILE } from '@/constants/profile';

export const Header = () => {
	return (
		<header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6">
				<Link href="/" className="shrink-0 font-display text-base tracking-[-0.02em] sm:text-lg">
					{PROFILE.handle}
				</Link>
				<div className="flex items-center gap-1 sm:gap-2">
					<NavMenu />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
