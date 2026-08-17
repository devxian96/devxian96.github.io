import { SectionHeading } from '@/components/molecules/SectionHeading';
import { StackRow } from '@/components/molecules/StackRow';
import { STACK } from '@/constants/stack';

export const StackSection = () => {
	return (
		<section id="stack" className="border-y bg-card/40">
			<div className="mx-auto max-w-5xl px-6 py-20">
				<SectionHeading index="04 / STACK" title="쓰는 것들" />

				<div className="flex flex-col">
					{STACK.map((group) => (
						<StackRow key={group.category} category={group.category} items={group.items} />
					))}
				</div>
			</div>
		</section>
	);
};
