import { ProjectBand } from '@/components/molecules/ProjectBand';
import { ProjectRow } from '@/components/molecules/ProjectRow';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { PROJECTS } from '@/constants/projects';

/** 화면이 남아 있는 것은 크게, 아닌 것은 촘촘하게. 규격이 같은 카드로 줄 세우지 않는다. */
const bandProjects = PROJECTS.filter((project) => Boolean(project.image));
const rowProjects = PROJECTS.filter((project) => !project.image);

export const WorkSection = () => {
	return (
		<section id="work" className="mx-auto max-w-6xl px-6 section-y">
			<SectionTitle
				title="6년치 증거"
				description="회사에서, 팀에서, 주말에 만든 것들. 링크가 살아 있는 것은 직접 열어볼 수 있습니다."
			/>

			<div className="flex flex-col gap-24 sm:gap-32">
				{bandProjects.map((project, index) => (
					<ProjectBand key={project.name} project={project} index={index} />
				))}
			</div>

			<div className="mt-24 flex flex-col">
				{rowProjects.map((project) => (
					<ProjectRow key={project.name} project={project} />
				))}
			</div>
		</section>
	);
};
