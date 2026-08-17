import { SectionTitle } from '@/components/molecules/SectionTitle';
import { EDUCATION, PROFILE } from '@/constants/profile';

export const EducationSection = () => {
	return (
		<section className="border-t bg-card">
			<div className="mx-auto flex max-w-3xl flex-col px-6 section-y">
				<SectionTitle title="학력" />

				<div className="flex flex-col">
					{EDUCATION.map((entry) => (
						<div
							key={entry.school}
							className="flex flex-col gap-1 border-b py-4 last:border-b-0 sm:flex-row sm:gap-8"
						>
							<span className="w-44 shrink-0 font-mono text-sm text-muted-foreground">
								{entry.period}
							</span>
							<span className="text-sm">
								{entry.school} <span className="text-muted-foreground">{entry.major}</span>
							</span>
						</div>
					))}
				</div>

				<a
					href="https://www.koreascience.or.kr/article/CFKO201924664108144.page"
					target="_blank"
					rel="noreferrer"
					className="mt-8 w-fit font-mono text-sm text-primary hover:underline"
				>
					대학 통합 설문조사 시스템 설계 및 구축 (2019) ↗
				</a>

				<a
					href={PROFILE.linkedin}
					target="_blank"
					rel="noreferrer"
					className="mt-2 w-fit font-mono text-sm text-primary hover:underline"
				>
					LinkedIn ↗
				</a>
			</div>
		</section>
	);
};
