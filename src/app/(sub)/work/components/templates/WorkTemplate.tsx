import { BuiltSection } from '@/app/(sub)/work/components/organisms/BuiltSection';
import { ProjectListSection } from '@/app/(sub)/work/components/organisms/ProjectListSection';
import { PageHeader } from '@/components/molecules/PageHeader';

export const WorkTemplate = () => {
	return (
		<main>
			<PageHeader
				title="만든 것"
				description="회사에서, 팀에서, 주말에 만든 것들. 링크가 살아 있는 것은 직접 열어볼 수 있습니다."
			/>
			<ProjectListSection />
			<BuiltSection />
		</main>
	);
};
