import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/constants/projects';

interface Props {
	project: Project;
}

/**
 * 화면이 남아 있지 않은 프로젝트. 밴드로 키우면 빈 이미지 자리가 생기므로
 * 밀도 있는 표 형태의 행으로 둔다. 채용 담당자는 여백이 아니라 근거를 읽는다.
 */
export const ProjectRow = ({ project }: Props) => {
	return (
		<article className="grid gap-4 border-t py-8 md:grid-cols-[14rem_1fr] md:gap-10">
			<div className="flex flex-col gap-1">
				<span className="font-mono text-sm text-muted-foreground">{project.period}</span>
				<h3 className="text-lg font-bold">{project.name}</h3>
				<span className="text-xs text-muted-foreground">{project.org}</span>
			</div>

			<div className="flex flex-col gap-4">
				<p className="measure text-sm/relaxed text-muted-foreground">{project.summary}</p>
				{/* 구분선이 없으면 항목들이 한 문장으로 뭉쳐 읽힌다. */}
				<ul className="flex flex-wrap gap-y-1.5">
					{project.highlights.map((highlight) => (
						<li
							key={highlight}
							className="text-sm text-muted-foreground after:mx-2.5 after:text-border after:content-['/'] last:after:content-none"
						>
							{highlight}
						</li>
					))}
				</ul>
				<p className="font-mono text-xs/relaxed text-muted-foreground">{project.stack}</p>

				{project.href ? (
					<a
						href={project.href}
						target="_blank"
						rel="noreferrer"
						className="inline-flex w-fit items-center gap-1.5 border-b border-foreground pb-0.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
					>
						바로가기
						<ArrowUpRight className="size-4" />
					</a>
				) : null}
			</div>
		</article>
	);
};
