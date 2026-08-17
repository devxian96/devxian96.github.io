import { SectionHeading } from '@/components/molecules/SectionHeading';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { TIMELINE } from '@/constants/timeline';

export const CareerSection = () => {
	return (
		<section id="career" className="border-y bg-card/40">
			<div className="mx-auto max-w-5xl px-6 py-20">
				<SectionHeading index="04 / CAREER" title="지나온 길" />

				<ol className="flex flex-col">
					{TIMELINE.map((entry) => (
						<TimelineItem
							key={`${entry.period}-${entry.org}`}
							period={entry.period}
							org={entry.org}
							role={entry.role}
							description={entry.description}
						/>
					))}
				</ol>
			</div>
		</section>
	);
};
