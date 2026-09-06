import Image from 'next/image';
import { HOME_SCREENS } from '@/constants/home';

/** 세 장면. 왼쪽 줄과 오른쪽 설명이 같은 창, 화면은 그보다 조금 늦게 닦여 나온다. */
const CUES = ['0 0.36 0 0.1', '0.32 0.68 0.1 0.1', '0.64 1 0.1 0.08'];
const REVEALS = ['0 0.02', '0.32 0.44', '0.64 0.76'];
const TALLY_AT = ['0.02', '0.36', '0.68'];

const hostOf = (href: string) => href.replace(/^https?:\/\//, '').replace(/\/$/, '');

/**
 * 3막 · 화면. 왼쪽에 무엇이 없었는지 한 줄, 오른쪽엔 실제 서비스 화면이 아래에서 위로 닦여 나온다.
 * 첫 화면은 지면이다(들어올 때 빈 무대를 보이지 않기 위해). 둘째·셋째가 그 위를 덮는다.
 * 셋째가 지금 만드는 것. 액센트는 여기 한 번.
 */
export const SplitScreens = () => {
	return (
		<section className="home-act home-screens" data-sc-act="pin" data-sc-span="4" data-home-act="screens">
			<div className="sc-stage home-stage" data-sc-stage="">
				<div className="home-half home-half--paper">
					<h2 className="sr-only">없어서 만든 서비스</h2>
					<div className="home-slot home-slot--paper">
						{HOME_SCREENS.map((screen, index) => (
							<p key={screen.project.name} className="home-void" data-sc-cue={CUES[index]}>
								{screen.missing}
							</p>
						))}
					</div>
				</div>

				<div className="home-half home-half--night">
					<div className="home-screens__frame" aria-hidden>
						{HOME_SCREENS.map((screen, index) => (
							<div
								key={screen.project.name}
								className="home-screen"
								data-sc-reveal={index === 0 ? undefined : 'up'}
								data-sc-reveal-at={index === 0 ? undefined : REVEALS[index]}
							>
								<Image
									src={screen.project.image ?? ''}
									alt=""
									width={1040}
									height={649}
									className="home-screen__img"
								/>
							</div>
						))}
					</div>

					<div className="home-slot home-slot--night">
						{HOME_SCREENS.map((screen, index) => (
							<div
								key={screen.project.name}
								className="home-made"
								data-sc-cue={CUES[index]}
								data-tally-at={TALLY_AT[index]}
							>
								{screen.now ? <p className="home-now">지금 만드는 것</p> : null}
								<p className="home-made__name">{screen.project.name}</p>
								<p className="home-mono">
									{screen.project.org} · {screen.period}
								</p>
								<p className="home-made__stack">{screen.project.stack}</p>
								{screen.project.href ? (
									<a
										href={screen.project.href}
										target="_blank"
										rel="noreferrer"
										className="home-link home-mono"
									>
										{hostOf(screen.project.href)}
									</a>
								) : null}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
