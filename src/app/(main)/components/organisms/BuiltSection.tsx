import { BuiltRow } from '@/components/molecules/BuiltRow';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { WORKS } from '@/constants/works';

export const BuiltSection = () => {
	return (
		<section id="built" className="border-y bg-card">
			<div className="mx-auto max-w-6xl px-6 section-y">
				<SectionTitle
					title="없어서 만들었습니다"
					description="필요한 부품이 없으면 만들어서 끼웠습니다. 여섯 개 다 공개되어 있습니다."
				/>

				<div className="flex flex-col border-b">
					{WORKS.map((work) => (
						<BuiltRow key={work.name} work={work} />
					))}
				</div>
			</div>
		</section>
	);
};
