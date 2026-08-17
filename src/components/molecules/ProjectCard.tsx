import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/constants/projects';

interface Props {
	project: Project;
}

export const ProjectCard = ({ project }: Props) => {
	return (
		<article className="flex flex-col overflow-hidden rounded-card border bg-card">
			{project.image ? (
				<div className="relative aspect-16/10 border-b bg-secondary">
					<Image
						src={project.image}
						alt={`${project.name} 화면`}
						fill
						sizes="(min-width: 768px) 50vw, 100vw"
						className="object-cover object-top"
					/>
				</div>
			) : null}

			<div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
				<div className="flex flex-col gap-1">
					<span className="font-mono text-xs tracking-wider text-primary">
						{project.org} · {project.period}
					</span>
					<h3 className="font-display text-2xl tracking-tight">{project.name}</h3>
				</div>

				<p className="text-sm/relaxed text-muted-foreground">{project.summary}</p>

				<ul className="flex flex-col gap-1.5">
					{project.highlights.map((highlight) => (
						<li key={highlight} className="flex gap-2 text-sm/relaxed text-muted-foreground">
							<span className="text-primary" aria-hidden>
								—
							</span>
							{highlight}
						</li>
					))}
				</ul>

				<p className="mt-auto pt-2 font-mono text-xs/relaxed text-muted-foreground">{project.stack}</p>

				{project.href ? (
					<a
						href={project.href}
						target="_blank"
						rel="noreferrer"
						className="inline-flex w-fit items-center gap-1 font-mono text-sm text-primary hover:underline"
					>
						바로가기
						<ArrowUpRight className="size-4" />
					</a>
				) : null}
			</div>
		</article>
	);
};
