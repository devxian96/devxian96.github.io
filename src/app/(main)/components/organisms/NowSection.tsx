import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/molecules/SectionHeading';

export const NowSection = () => {
	return (
		<section id="now" className="mx-auto max-w-5xl px-6 py-20">
			<SectionHeading index="01 / NOW" title="지금 만드는 것" />

			<a
				href="https://homebuilder.cafe24.com/"
				target="_blank"
				rel="noreferrer"
				className="group flex flex-col gap-4 rounded-card border bg-card p-8 transition-colors hover:border-primary/60"
			>
				<div className="flex items-start justify-between gap-4">
					<div className="flex flex-col gap-1">
						<span className="font-mono text-xs tracking-wider text-primary">Cafe24</span>
						<h3 className="font-display text-2xl tracking-tight">AI 홈페이지 빌더</h3>
					</div>
					<ArrowUpRight className="size-6 text-muted-foreground transition-colors group-hover:text-primary" />
				</div>

				<p className="max-w-3xl leading-relaxed text-muted-foreground">
					업종만 고르면 AI가 홈페이지 한 채를 통째로 지어주고, 대화로 문구·이미지·색·분위기를 고쳐 나갑니다.
					코드를 못 쓰는 사람도 자기 웹사이트를 가질 수 있게 하는 일 — 결국 &ldquo;없으면 만든다&rdquo;를 남의
					몫으로 넘겨주는 도구를 만드는 셈입니다.
				</p>
			</a>
		</section>
	);
};
