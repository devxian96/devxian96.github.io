import { EducationSection } from '@/app/(sub)/about/components/organisms/EducationSection';
import { ProfileSection } from '@/app/(sub)/about/components/organisms/ProfileSection';

export const AboutTemplate = () => {
	return (
		<main>
			<ProfileSection />
			<EducationSection />
		</main>
	);
};
