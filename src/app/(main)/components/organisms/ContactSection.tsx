import Image from 'next/image';
import { GithubIcon } from '@/components/atoms/github-icon';
import { LinkedinIcon } from '@/components/atoms/linkedin-icon';
import { Marker } from '@/components/molecules/Marker';
import { PROFILE } from '@/constants/profile';

/**
 * 히어로와 같은 어둠으로 닫는다. 마커도 같은 모션으로 한 번 더 —
 * 색과 모션 양쪽에서 수미상관을 만들어 마지막 인상을 한 곳에 모은다.
 */
export const ContactSection = () => {
	return (
		<section id="contact" className="bg-ink-900 text-white">
			<div className="mx-auto flex max-w-6xl flex-col gap-14 px-6 section-y">
				<h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[1.08] tracking-[-0.04em]">
					그래서, 다음은
					<br />
					무엇을 <Marker>만들까요.</Marker>
				</h2>

				<div className="flex flex-col gap-10 border-t border-white/15 pt-12 md:flex-row md:items-end md:justify-between">
					<div className="flex items-center gap-5">
						<Image
							src={PROFILE.avatar}
							alt="장석현. 해질녘 능선 위에서 바다를 등지고 선 옆모습."
							width={160}
							height={160}
							className="size-20 shrink-0 rounded-full object-cover"
						/>
						<div className="flex flex-col gap-1">
							<p className="text-lg font-bold">
								{PROFILE.name} · {PROFILE.nameEn}
							</p>
							<p className="measure text-sm/relaxed text-white/60">
								없는 걸 만들어야 하는 자리라면 잘 맞습니다. 편하게 연락 주세요.
							</p>
						</div>
					</div>

					<div className="flex flex-wrap items-center gap-3">
						<a
							href={`mailto:${PROFILE.email}`}
							className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink-900 transition-opacity hover:opacity-85"
						>
							{PROFILE.email}
						</a>
						<a
							href={PROFILE.github}
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub 프로필"
							className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white/60"
						>
							<GithubIcon className="size-4" />
						</a>
						<a
							href={PROFILE.linkedin}
							target="_blank"
							rel="noreferrer"
							aria-label="LinkedIn 프로필"
							className="inline-flex size-12 items-center justify-center rounded-full border border-white/25 transition-colors hover:border-white/60"
						>
							<LinkedinIcon className="size-4" />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
