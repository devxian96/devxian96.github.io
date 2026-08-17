import Link from 'next/link';
import { NavMenu } from '@/components/organisms/Header/NavMenu';
import { ThemeToggle } from '@/components/organisms/Header/ThemeToggle';
import { PROFILE } from '@/constants/profile';

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
				<Link href="/" className="font-mono text-base font-bold tracking-tight">
					<span className="text-primary">$</span> {PROFILE.handle}
				</Link>
				<div className="flex items-center gap-2">
					<NavMenu />
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
};
