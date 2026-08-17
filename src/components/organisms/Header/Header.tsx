'use client';

import Link from 'next/link';
import { NavMenu } from '@/components/organisms/Header/NavMenu';
import { ThemeToggle } from '@/components/organisms/Header/ThemeToggle';
import { PROFILE } from '@/constants/profile';
import { useHeaderAppearance } from '@/hooks/useHeaderAppearance';

export const Header = () => {
	const { isSolid } = useHeaderAppearance();

	return (
		<header
			data-solid={isSolid}
			className="group/header fixed inset-x-0 top-0 z-40 transition-colors duration-300 data-[solid=true]:border-b data-[solid=true]:bg-background/85 data-[solid=true]:backdrop-blur-md"
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-5 sm:gap-4 sm:px-6">
				<Link
					href="/"
					className="shrink-0 font-display text-base tracking-[-0.02em] text-white transition-colors group-data-[solid=true]/header:text-foreground sm:text-lg"
				>
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
