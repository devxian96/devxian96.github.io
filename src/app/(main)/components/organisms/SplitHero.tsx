'use client';

import Image from 'next/image';
import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';
import { INTRO, PROFILE } from '@/constants/profile';
import { usePointerDepth } from '@/hooks/usePointerDepth';

/**
 * 1막 · 갈림. 왼쪽은 종이, 오른쪽은 밤.
 *
 * 두 단어가 선을 사이에 두고 한 문장으로 읽힌다. 오른쪽 방은 네 층(먼 사진, 제목, 화면 둘, 안개)이
 * 서로 다른 속도로 움직여 깊이를 만들고, 앞쪽 화면이 스크롤에 따라 제목 위를 지난다.
 * 제목은 층 사이에 있다. 사진에 글자를 굽지 않는다.
 */
export const SplitHero = () => {
	const roomRef = usePointerDepth();

	return (
		<section className="home-act home-hero" data-sc-act="pin" data-sc-span="1.5" data-home-act="hero">
			<div className="sc-stage home-stage" data-sc-stage="">
				{/* 사람은 두 지면 사이, 선 위에 선다. 종이색 테두리가 밤 쪽에서 사진을 인화지처럼 띄운다. */}
				<Image
					src={PROFILE.avatar}
					alt="장석현. 해질녘 능선 위에서 바다를 등지고 선 옆모습."
					width={420}
					height={420}
					priority
					className="home-hero__avatar"
					data-sc-cue="0 1 0 0.12"
				/>
				<div className="home-half home-half--paper home-hero__paper">
					<h1 className="sr-only">{PROFILE.tagline}</h1>
					<div className="home-hero__copy" data-sc-cue="0 1 0 0.12">
						<p className="home-mono">
							{PROFILE.name} · {PROFILE.nameEn} · {PROFILE.role} @ {PROFILE.company} · {PROFILE.career}
						</p>
						<p className="home-hero__intro">
							{INTRO[0]}
							<br />
							{INTRO[1]}
						</p>
						<p className="home-word" aria-hidden>
							없으면,
						</p>
					</div>
				</div>

				<div ref={roomRef} className="home-half home-half--night home-hero__room">
					<div className="home-plane home-plane--far" data-sc-parallax="0.25" aria-hidden>
						<div className="home-plane__inner">
							<Image
								src="/images/home/hero-far.jpg"
								alt=""
								width={1200}
								height={1600}
								priority
								className="home-plane__photo"
							/>
						</div>
					</div>

					<p className="home-word home-hero__word" aria-hidden data-sc-cue="0 1 0 0.12">
						만든다.
					</p>

					<div className="home-plane home-plane--mid" data-sc-parallax="-0.55" aria-hidden>
						<figure className="home-plane__inner home-shot">
							<Image
								src="/images/works/homebuilder.jpg"
								alt=""
								width={1040}
								height={649}
								priority
								className="home-shot__img"
							/>
						</figure>
					</div>

					<div className="home-plane home-plane--near" data-sc-parallax="-1.05" aria-hidden>
						<figure className="home-plane__inner home-shot">
							<Image
								src="/images/works/buzzle.jpg"
								alt=""
								width={1040}
								height={649}
								className="home-shot__img"
							/>
						</figure>
					</div>

					<div className="home-plane home-plane--haze" data-sc-parallax="0.4" aria-hidden>
						<div className="home-plane__inner" />
					</div>

					<nav className="home-hero__nav" aria-label="사이트" data-sc-cue="0 1 0 0.12">
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
				</div>
			</div>
		</section>
	);
};
