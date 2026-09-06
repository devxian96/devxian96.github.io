import { ScrollCraftMount } from '@/app/(main)/components/organisms/ScrollCraftMount';
import { SplitClose } from '@/app/(main)/components/organisms/SplitClose';
import { SplitDivider } from '@/app/(main)/components/organisms/SplitDivider';
import { SplitHero } from '@/app/(main)/components/organisms/SplitHero';
import { SplitLedger } from '@/app/(main)/components/organisms/SplitLedger';
import { SplitScreens } from '@/app/(main)/components/organisms/SplitScreens';
import { SplitTimings } from '@/app/(main)/components/organisms/SplitTimings';
import '@/app/(main)/home.css';

/**
 * 홈은 "없으면 | 만든다"로 반 갈린 무대다(scroll-craft split stage).
 * 다섯 막이 순서대로 고정(pin)되고, 가운데 선은 고정 chrome이라 막 밖에 둔다.
 * 마지막 막이 페이지의 마지막 요소여야 한다. 그 뒤에 푸터를 두면 결말이 흐려진다.
 */
export const HomeTemplate = () => {
	return (
		<main className="home">
			<noscript>
				<style>{'[data-sc-cue]{opacity:1}'}</style>
			</noscript>
			<ScrollCraftMount />
			<SplitDivider />
			<SplitHero />
			<SplitLedger />
			<SplitScreens />
			<SplitTimings />
			<SplitClose />
		</main>
	);
};
