import { ProjectBand } from '@/components/molecules/ProjectBand';
import { ProjectRow } from '@/components/molecules/ProjectRow';
import { PROJECTS } from '@/constants/projects';

/** 화면이 남아 있는 것은 크게, 아닌 것은 촘촘하게. 규격이 같은 카드로 줄 세우지 않는다. */
const bandProjects = PROJECTS.filter((project) => Boolean(project.image));
const rowProjects = PROJECTS.filter((project) => !project.image);

export const ProjectListSection = () => {
	return (
		<section className="mx-auto max-w-6xl px-6 section-y">
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
