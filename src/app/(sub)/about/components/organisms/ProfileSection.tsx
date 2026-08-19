import Image from 'next/image';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { CREDO, PROFILE } from '@/constants/profile';

export const ProfileSection = () => {
	return (
		<section className="mx-auto max-w-3xl px-6 section-y">
			<SectionTitle title={`${PROFILE.name} · ${PROFILE.nameEn}`} />

			<figure className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
				<Image
					src="/images/mypic.webp"
					alt="노트북 앞에서 작업 중인 장석현"
					width={200}
					height={200}
					className="size-40 rounded-card border object-cover"
				/>
				<figcaption className="text-sm/relaxed text-muted-foreground">{CREDO.join(' ')}</figcaption>
			</figure>

			<div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
				<p>
					여주대학교 컴퓨터정보과를 마치고 한림대학교 빅데이터학과로 편입했습니다. 그 사이사이 프리랜서로
					쇼핑몰과 커뮤니티를 만들었고 스타트업에서 팀원으로, 연구소에서 연구원으로 일했습니다. 2021년
					10월부터 {PROFILE.company}에 있고, 지금은 AI 홈페이지 빌더를 만듭니다. {PROFILE.career}입니다.
				</p>

				<p>
					이력을 늘어놓으면 언어와 프레임워크가 제각각이지만 하나로 꿰면 늘 같은 문장이 남습니다 —{' '}
					<strong className="text-primary">{PROFILE.tagline}</strong> PHP에 쓸 만한 REST 프레임워크가 없어서
					phpExpress를 만들었고, Vue에 있는 글로벌 컴포넌트가 React엔 없어서 라이브러리로 만들었고, 뉴모피즘을
					매번 손으로 그리기 싫어서 프레임워크로 만들어 오픈소스로 냈습니다.
				</p>

				<p>
					브라우저에서 무거운 걸 돌리는 일을 오래 했습니다. 에디봇에서는 버추얼돔을 포함한 SPA 라이브러리를
					직접 만들어 편집영역 미니맵에 썼고 Canvas·SVG·Blob을 겹쳐 이미지 필터를 만들었고 콘솔 에러를 모으는
					트래커를 Sentry 없이 붙였습니다.
				</p>

				<p>
					요즘은 AI를 도구가 아니라 팀의 일부로 쓰는 방법을 팝니다. AI 홈페이지 빌더는 3개월 동안 전체의 91%를
					바이브코딩으로 만들었고 그 속도가 스파게티가 되지 않도록 커스텀 ESLint 룰과 Claude Skills, husky를
					먼저 깔았습니다. 잘 만든 도구는 만들 줄 모르는 사람에게도 만드는 힘을 준다고 생각합니다.
				</p>
			</div>
		</section>
	);
};
