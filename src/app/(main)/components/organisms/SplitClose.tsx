import Link from 'next/link';
import { HOME_DOC_LINKS } from '@/constants/home';
import { NAV_ITEMS } from '@/constants/navigation';
import { PROFILE } from '@/constants/profile';

/**
 * 5막 · 결말. 피크.
 *
 * 무대가 올라오는 순간 이미 완성된 분할 화면이다: 종이 쪽 "그래서, 다음은", 밤 쪽 "무엇을 만들까요."
 * 둘 다 greet. 빈 화면이 한 프레임도 없다. 0.12~0.4에 선이 왼쪽 끝으로 밀려나며 밤이 종이를 삼키고,
 * 밤 쪽 카피는 그 선을 타고 같이 왼쪽으로 이동한다(--collapse로 translate). 그 뒤 메뉴와 바닥이 켜진다. 붕괴는 CSS가 --sc-p에서 직접 구동한다.
 * 그 뒤 "무엇을 만들까요."와 메일이 켜져서 페이지가 끝날 때까지 홀드한다. 마지막 막만 홀드할 수 있다.
 */
export const SplitClose = () => {
	return (
		<section
			id="home-close"
			className="home-act home-close"
			data-sc-act="pin"
			data-sc-span="3.4"
			data-home-act="close"
		>
			<div className="sc-stage home-stage home-close__stage" data-sc-stage="">
				<div className="home-half home-half--paper home-close__paper">
					<p className="home-void home-close__cue" data-sc-cue="0 0.24 0 0.5">
						그래서, 다음은
					</p>
				</div>

				<div className="home-half home-half--night home-close__night">
					<nav className="home-hero__nav home-close__nav" aria-label="사이트" data-sc-cue="0.48">
						<span className="home-hero__mark">{PROFILE.handle}</span>
						{NAV_ITEMS.map((item) => (
							<Link key={item.href} href={item.href} prefetch={false} className="home-link">
								{item.label}
							</Link>
						))}
						<a href={PROFILE.github} target="_blank" rel="noreferrer" className="home-link">
							GitHub
						</a>
						<a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="home-link">
							LinkedIn
						</a>
					</nav>
					<div className="home-close__body">
						<h2 className="home-close__title" data-sc-cue="0 1 0 0">
							무엇을 만들까요.
						</h2>
						<p className="home-close__lede" data-sc-cue="0 1 0 0">
							어려운 프로젝트일수록 좋습니다. 아직 아무도 만들지 않은 것이면 더 좋고요.
						</p>
						<a href={`mailto:${PROFILE.email}`} className="home-cta" data-sc-cue="0 1 0 0">
							{PROFILE.email}
						</a>

						<footer className="home-close__foot" data-sc-cue="0.52">
							<nav className="home-close__links" aria-label="사이트 문서">
								{HOME_DOC_LINKS.map((item) => (
									<Link key={item.href} href={item.href} prefetch={false} className="home-link">
										{item.label}
									</Link>
								))}
							</nav>
							<p className="home-mono">
								© {PROFILE.handle} · {PROFILE.name} · {PROFILE.location}
							</p>
						</footer>
					</div>
				</div>
			</div>
		</section>
	);
};
