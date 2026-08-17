import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/constants/projects';

interface Props {
	project: Project;
	index: number;
}

/**
 * 대표작 한 건을 화면 폭으로 펼친다. 카드 그리드가 아니라 밴드인 이유 —
 * 같은 규격 카드 여섯 개는 "여섯 개 있다"만 전달하지만,
 * 밴드는 실제 화면을 읽을 수 있는 크기로 보여준다(show, don't tell).
 *
 * 홀짝으로 이미지 좌우를 바꿔 스크롤에 리듬을 준다.
 */
export const ProjectBand = ({ project, index }: Props) => {
	const isReversed = index % 2 === 1;

	return (
		<article className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
			<div className={isReversed ? 'lg:order-2' : undefined}>
				{/* 스크린샷마다 세로 비율이 제각각이라(랜딩 한 화면 vs 전체 페이지 캡처)
				    높이를 고정하지 않으면 밴드마다 텍스트 쪽에 빈 공간이 크게 생긴다.
				    위쪽을 기준으로 잘라 첫 화면이 항상 보이게 한다. */}
				<div className="aspect-16/10 overflow-hidden rounded-card border bg-card shadow-[0_24px_60px_-32px_rgb(14_22_34/0.45)]">
					{project.image ? (
						<Image
							src={project.image}
							alt={project.imageAlt ?? `${project.name} 화면`}
							width={1200}
							height={750}
							sizes="(min-width: 1024px) 50vw, 100vw"
							className="size-full object-cover object-top"
						/>
					) : null}
				</div>
			</div>

			<div className={isReversed ? 'flex flex-col gap-5 lg:order-1' : 'flex flex-col gap-5'}>
				<div className="flex flex-col gap-2">
					<span className="text-sm text-muted-foreground">
						{project.org} · {project.period}
					</span>
					<h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] tracking-[-0.03em]">{project.name}</h3>
				</div>

				<p className="measure text-base/relaxed text-muted-foreground">{project.summary}</p>

				<ul className="flex flex-col gap-2 border-t pt-5">
					{project.highlights.map((highlight) => (
						<li key={highlight} className="grid grid-cols-[1rem_1fr] gap-2 text-sm/relaxed">
							<span className="pt-[0.45em] text-muted-foreground" aria-hidden>
								—
							</span>
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
						서비스 열기
						<ArrowUpRight className="size-4" />
					</a>
				) : null}
			</div>
		</article>
	);
};
