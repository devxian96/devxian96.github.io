import { CareerPreviewSection } from '@/app/(main)/components/organisms/CareerPreviewSection';
import { ContactSection } from '@/app/(main)/components/organisms/ContactSection';
import { HeroSection } from '@/app/(main)/components/organisms/HeroSection';
import { NowSection } from '@/app/(main)/components/organisms/NowSection';
import { WorkPreviewSection } from '@/app/(main)/components/organisms/WorkPreviewSection';
import { WritingSection } from '@/app/(main)/components/organisms/WritingSection';

/**
 * 홈은 요약이고, 각 항목의 전체는 별도 페이지가 맡는다.
 * 한 화면 안을 스크롤로 이동하는 앵커 대신 실제 라우트로 분기한다.
 */
export const HomeTemplate = () => {
	return (
		<main>
			<HeroSection />
			<NowSection />
			<WorkPreviewSection />
			<CareerPreviewSection />
			<WritingSection />
			<ContactSection />
		</main>
	);
};
