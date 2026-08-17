import { ContactSection } from '@/app/(main)/components/organisms/ContactSection';
import { HeroSection } from '@/app/(main)/components/organisms/HeroSection';
import { NowSection } from '@/app/(main)/components/organisms/NowSection';
import { StackSection } from '@/app/(main)/components/organisms/StackSection';
import { TimelineSection } from '@/app/(main)/components/organisms/TimelineSection';
import { WorksSection } from '@/app/(main)/components/organisms/WorksSection';

export const HomeTemplate = () => {
	return (
		<main>
			<HeroSection />
			<NowSection />
			<WorksSection />
			<TimelineSection />
			<StackSection />
			<ContactSection />
		</main>
	);
};
