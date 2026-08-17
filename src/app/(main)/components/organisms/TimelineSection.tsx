import { SectionHeading } from '@/components/molecules/SectionHeading';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { TIMELINE } from '@/constants/timeline';

export const TimelineSection = () => {
	return (
		<section id="timeline" className="mx-auto max-w-5xl px-6 py-20">
			<SectionHeading index="03 / TIMELINE" title="지나온 길" />

			<ol className="flex flex-col">
				{TIMELINE.map((entry) => (
					<TimelineItem
						key={`${entry.period}-${entry.title}`}
						period={entry.period}
						title={entry.title}
						description={entry.description}
					/>
				))}
			</ol>
		</section>
	);
};
