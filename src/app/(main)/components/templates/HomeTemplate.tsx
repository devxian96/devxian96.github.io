import { CareerSection } from '@/app/(main)/components/organisms/CareerSection';
import { ContactSection } from '@/app/(main)/components/organisms/ContactSection';
import { HeroSection } from '@/app/(main)/components/organisms/HeroSection';
import { NowSection } from '@/app/(main)/components/organisms/NowSection';
import { ProjectsSection } from '@/app/(main)/components/organisms/ProjectsSection';
import { RecentPostsSection } from '@/app/(main)/components/organisms/RecentPostsSection';
import { StackSection } from '@/app/(main)/components/organisms/StackSection';
import { WorksSection } from '@/app/(main)/components/organisms/WorksSection';

export const HomeTemplate = () => {
	return (
		<main>
			<HeroSection />
			<NowSection />
			<WorksSection />
			<ProjectsSection />
			<CareerSection />
			<StackSection />
			<RecentPostsSection />
			<ContactSection />
		</main>
	);
};
