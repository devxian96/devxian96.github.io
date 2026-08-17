import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ProjectBand } from '@/components/molecules/ProjectBand';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { PROJECTS } from '@/constants/projects';

/**
 * 화면이 남아 있는 프로젝트는 홈에서 전부 보여준다.
 * 개수를 줄이면 "만든 게 이것뿐"으로 읽힌다 — 홈이 요약이라도 결과물은 깎지 않는다.
 * 화면이 없는 프로젝트까지 포함한 전체 목록은 /work가 맡는다.
 */
const featured = PROJECTS.filter((project) => Boolean(project.image));

export const WorkPreviewSection = () => {
	return (
		<section className="mx-auto max-w-6xl px-6 section-y">
			<SectionTitle title="만든 것" description="회사에서, 팀에서, 주말에 만든 서비스." />

			<div className="flex flex-col gap-24 sm:gap-32">
				{featured.map((project, index) => (
					<ProjectBand key={project.name} project={project} index={index} />
				))}
			</div>

			<Link
				href="/work"
				className="mt-20 inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
			>
				만든 것 전체 보기
				<ArrowRight className="size-4" />
			</Link>
		</section>
	);
};
