'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * 헤더가 배경 없이 얹힐지, 흰 배경을 켤지 결정한다.
 *
 * 홈은 첫 화면이 화면을 꽉 채우는 다크 히어로라 맨 위에서는 배경 없이 흰 글자로 얹혀야 한다.
 * 다른 페이지는 첫 화면이 밝으므로 흰 글자로 두면 글자가 사라진다 — 그래서 경로도 함께 본다.
 */
export const useHeaderAppearance = () => {
	const pathname = usePathname();
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 8);

		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const hasDarkHero = pathname === '/';

	return { isSolid: isScrolled || !hasDarkHero };
};
