import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { TIMELINE } from '@/constants/timeline';

/** 홈에는 현재 진행 중인 소속만. 전체 연혁과 학력은 /career가 맡는다. */
const current = TIMELINE.slice(0, 2);

export const CareerPreviewSection = () => {
	return (
		<section className="border-y bg-card">
			<div className="mx-auto max-w-6xl px-6 section-y">
				<SectionTitle title="지나온 길" description="지금 몸담고 있는 두 곳." />

				<ol className="flex flex-col">
					{current.map((entry) => (
						<TimelineItem
							key={`${entry.period}-${entry.org}`}
							period={entry.period}
							org={entry.org}
							role={entry.role}
							description={entry.description}
						/>
					))}
				</ol>

				<Link
					href="/career"
					className="mt-8 inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
				>
					전체 경력 보기
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</section>
	);
};
