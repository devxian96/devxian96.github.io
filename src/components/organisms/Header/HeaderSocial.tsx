import { GithubIcon } from '@/components/atoms/github-icon';
import { LinkedinIcon } from '@/components/atoms/linkedin-icon';
import { PROFILE } from '@/constants/profile';

/**
 * 상단 외부 링크.
 *
 * 좁은 화면에서는 숨긴다 — 390px에서 로고·메뉴 4개·테마 토글까지 넣으면 자리가 없고,
 * 같은 링크가 클로징과 푸터에 이미 있어서 모바일에서 접근성이 사라지지도 않는다.
 */
export const HeaderSocial = () => {
	return (
		<div className="hidden items-center sm:flex">
			<a
				href={PROFILE.github}
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub 프로필 열기"
				className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
			>
				<GithubIcon className="size-4" />
			</a>
			<a
				href={PROFILE.linkedin}
				target="_blank"
				rel="noreferrer"
				aria-label="LinkedIn 프로필 열기"
				className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
			>
				<LinkedinIcon className="size-4" />
			</a>
		</div>
	);
};
