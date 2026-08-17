import { SectionHeading } from '@/components/molecules/SectionHeading';
import { PROFILE } from '@/constants/profile';

export const ProfileSection = () => {
	return (
		<section className="mx-auto max-w-3xl px-6 py-20">
			<SectionHeading index="ABOUT" title={`${PROFILE.name} · ${PROFILE.nameEn}`} />

			<div className="flex flex-col gap-6 leading-relaxed text-muted-foreground">
				<p>
					여주대학교 컴퓨터정보과를 마치고 한림대학교 빅데이터학과로 편입했습니다. 그 사이사이 프리랜서로
					쇼핑몰과 커뮤니티를 만들었고, 스타트업에서 팀원으로, 연구소에서 연구원으로 일했습니다. 지금은{' '}
					{PROFILE.company}에서 AI 홈페이지 빌더를 만듭니다.
				</p>

				<p>
					이력을 늘어놓으면 언어와 프레임워크가 제각각이지만, 하나로 꿰면 늘 같은 문장이 남습니다 —{' '}
					<strong className="text-primary">{PROFILE.tagline}</strong> PHP에 쓸 만한 REST 프레임워크가 없어서
					phpExpress를 만들었고, Vue에 있는 글로벌 컴포넌트가 React엔 없어서 라이브러리로 만들었고, 라이브러리
					없이 웹이 어디까지 되는지 궁금해서 클럽을 만들었습니다.
				</p>

				<p>
					요즘 관심사는 브라우저에서 무거운 걸 돌리는 일입니다. Canvas와 SVG, Blob을 겹쳐 이미지 편집기를
					만들었고, 그 경험이 지금 만드는 빌더로 이어졌습니다. 잘 만든 도구는 만들 줄 모르는 사람에게도 만드는
					힘을 준다고 생각합니다.
				</p>

				<p className="font-mono text-sm">
					<a href={`mailto:${PROFILE.email}`} className="text-primary hover:underline">
						{PROFILE.email}
					</a>
				</p>
			</div>
		</section>
	);
};
