import { ArrowUpRight } from 'lucide-react';

export const NowSection = () => {
	return (
		<section id="now" className="border-b bg-card">
			<div className="mx-auto max-w-6xl px-6 section-y">
				<div className="flex flex-col gap-6">
					<p className="text-sm font-bold text-primary">지금 만들고 있는 것</p>

					<h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.03em]">
						업종만 고르면, AI가 홈페이지 한 채를 짓습니다.
					</h2>

					<p className="measure text-lg/relaxed text-muted-foreground">
						카페24 AI 홈페이지 빌더. 기획·디자인·프론트엔드·백엔드가 다 함께 AI를 쓰는 협업 프로세스를
						세우고 3개월 만에 냈습니다. 전체의 91%를 바이브코딩으로 만들면서도 코드가 무너지지 않도록,
						커스텀 ESLint 룰과 Claude Skills를 먼저 깔았습니다.
					</p>

					<a
						href="https://homebuilder.cafe24.com/"
						target="_blank"
						rel="noreferrer"
						className="inline-flex w-fit items-center gap-1.5 border-b border-foreground pb-0.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
					>
						homebuilder.cafe24.com
						<ArrowUpRight className="size-4" />
					</a>
				</div>
			</div>
		</section>
	);
};
