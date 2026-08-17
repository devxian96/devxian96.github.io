import Image from 'next/image';
import { Mail } from 'lucide-react';
import { Marker } from '@/components/molecules/Marker';
import { PROFILE } from '@/constants/profile';
import { STATS } from '@/constants/stats';

export const HeroSection = () => {
	return (
		<section className="border-b">
			<div className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20">
				<div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
					<div className="flex flex-col gap-8">
						<p className="text-sm text-muted-foreground">
							{PROFILE.name} · {PROFILE.nameEn} — {PROFILE.role} @ {PROFILE.company}
						</p>

						<h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.08] tracking-[-0.035em]">
							<Marker>없으면 만든다.</Marker>
						</h1>

						<p className="measure text-lg/relaxed text-muted-foreground sm:text-xl/relaxed">
							프레임워크가 없어서 만들었고, 라이브러리가 아쉬워서 만들었습니다. 지금은 코드를 못 쓰는
							사람도 자기 웹사이트를 가질 수 있는 도구를 만듭니다.
						</p>

						{/* CTA는 하나만 둔다. 같은 화면 안을 스크롤하는 버튼은 이동이 아니라 소음이다. */}
						<a
							href={`mailto:${PROFILE.email}`}
							className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-85"
						>
							<Mail className="size-4" />
							{PROFILE.email}
						</a>
					</div>

					<Image
						src={PROFILE.avatar}
						alt="장석현. 해질녘 능선 위에서 바다를 등지고 선 옆모습."
						width={260}
						height={260}
						priority
						className="size-32 shrink-0 rounded-full border object-cover sm:size-44 lg:size-52"
					/>
				</div>

				<dl className="mt-16 grid gap-px overflow-hidden rounded-card border bg-border sm:grid-cols-3">
					{STATS.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col items-center gap-1 bg-background p-6 text-center"
						>
							<dt className="text-xs text-muted-foreground">{stat.label}</dt>
							<dd className="font-display text-2xl tracking-[-0.02em]">{stat.value}</dd>
						</div>
					))}
				</dl>
			</div>
		</section>
	);
};
