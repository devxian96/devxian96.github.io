import { SectionTitle } from '@/components/molecules/SectionTitle';
import { TimelineItem } from '@/components/molecules/TimelineItem';
import { STACK } from '@/constants/stack';
import { TIMELINE } from '@/constants/timeline';

export const CareerSection = () => {
	return (
		<section id="career" className="mx-auto max-w-6xl px-6 section-y">
			<SectionTitle title="지나온 길" />

			<div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
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

				<div className="flex flex-col gap-6">
					<h3 className="font-display text-xl tracking-[-0.02em]">쓰는 것</h3>
					<dl className="flex flex-col">
						{STACK.map((group) => (
							<div key={group.category} className="flex flex-col gap-1 border-t py-4">
								<dt className="font-mono text-xs tracking-wide text-muted-foreground">
									{group.category}
								</dt>
								<dd className="text-sm/relaxed">{group.items}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</section>
	);
};
