import { EducationSection } from '@/app/(sub)/career/components/organisms/EducationSection';
import { TimelineSection } from '@/app/(sub)/career/components/organisms/TimelineSection';
import { PageHeader } from '@/components/molecules/PageHeader';
import { PROFILE } from '@/constants/profile';

export const CareerTemplate = () => {
	return (
		<main>
			<PageHeader
				title="지나온 길"
				description={`${PROFILE.career}. 소속과 기간, 그 자리에서 무엇을 만들었는지.`}
			/>
			<TimelineSection />
			<EducationSection />
		</main>
	);
};
