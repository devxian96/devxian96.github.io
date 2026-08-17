import { ProjectCard } from '@/components/molecules/ProjectCard';
import { SectionHeading } from '@/components/molecules/SectionHeading';
import { PROJECTS } from '@/constants/projects';

export const ProjectsSection = () => {
	return (
		<section id="projects">
			<div className="mx-auto max-w-5xl px-6 py-20">
				<SectionHeading
					index="03 / PROJECTS"
					title="만든 서비스"
					description="회사에서, 팀에서, 주말에 만든 것들. 화면이 남아 있는 것만 골랐습니다."
				/>

				<div className="grid gap-6 md:grid-cols-2">
					{PROJECTS.map((project) => (
						<ProjectCard key={project.name} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};
