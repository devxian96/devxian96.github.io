import { BuiltSection } from '@/app/(main)/components/organisms/BuiltSection';
import { CareerSection } from '@/app/(main)/components/organisms/CareerSection';
import { ContactSection } from '@/app/(main)/components/organisms/ContactSection';
import { HeroSection } from '@/app/(main)/components/organisms/HeroSection';
import { NowSection } from '@/app/(main)/components/organisms/NowSection';
import { ThesisSection } from '@/app/(main)/components/organisms/ThesisSection';
import { WorkSection } from '@/app/(main)/components/organisms/WorkSection';
import { WritingSection } from '@/app/(main)/components/organisms/WritingSection';

/**
 * 하나의 문장을 여섯 번 증명하는 순서다 — "없으면 만든다".
 * 주장(Hero) → 지금도 그렇다(Now) → 6년치 증거(Work) → 부품까지 만든다(Built)
 * → 규모와 범위(Career) → 기록(Writing) → 클로징(Contact).
 */
export const HomeTemplate = () => {
	return (
		<main>
			<HeroSection />
			<ThesisSection />
			<NowSection />
			<WorkSection />
			<BuiltSection />
			<CareerSection />
			<WritingSection />
			<ContactSection />
		</main>
	);
};
