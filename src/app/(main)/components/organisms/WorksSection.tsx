import { SectionHeading } from '@/components/molecules/SectionHeading';
import { WorkCard } from '@/components/molecules/WorkCard';
import { INTRO } from '@/constants/profile';
import { WORKS } from '@/constants/works';

export const WorksSection = () => {
	return (
		<section id="works" className="border-y bg-card/40">
			<div className="mx-auto max-w-5xl px-6 py-20">
				<SectionHeading index="02 / WORKS" title="없어서 만들었습니다" description={INTRO.join(' ')} />

				<div className="grid gap-4 sm:grid-cols-2">
					{WORKS.map((work) => (
						<WorkCard
							key={work.name}
							name={work.name}
							reason={work.reason}
							stack={work.stack}
							href={work.href}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
