import Link from 'next/link';
import { AssemblyStage } from '@/components/molecules/AssemblyStage';
import { Marker } from '@/components/molecules/Marker';
import { PROFILE } from '@/constants/profile';

/**
 * 첫 화면은 한 가지만 말한다 — "없으면 만든다".
 *
 * 왼쪽에 주장, 오른쪽에 그 주장이 만들어내는 결과물이 조립되는 장면을 둔다.
 * 설명 문단과 지표는 다음 화면으로 미룬다. 첫 폴드에 두 가지를 담으면 둘 다 약해진다.
 *
 * 이 섹션만 테마와 무관하게 항상 어둡다. 문서 본문(라이트)과 대비를 만들고
 * 페이지의 시작과 끝(Contact)을 같은 톤으로 여닫기 위한 아트 디렉션이다.
 */
export const HeroSection = () => {
	return (
		<section className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-ink-900 text-white">
			<div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-14 px-6 pt-28 pb-16 sm:pt-32 lg:flex-row lg:items-center lg:gap-16">
				<div className="flex flex-col gap-9 lg:w-[48%]">
					<p className="text-sm text-white/60">
						{PROFILE.name} · {PROFILE.nameEn} — {PROFILE.role} @ {PROFILE.company}
					</p>

					<h1 className="font-display text-[clamp(2.75rem,7.5vw,5rem)] leading-[1.06] tracking-[-0.04em]">
						{/* 마커는 문장 전체가 아니라 동사에만 건다.
						    두 줄로 나뉘면 inline-block 박스가 두 줄 높이가 되어 아래 줄만 칠해지고,
						    무엇보다 전체에 칠하면 강조하는 지점이 사라진다. */}
						없으면 <Marker>만든다.</Marker>
					</h1>

					<div className="flex flex-wrap items-center gap-3">
						<Link
							href="#work"
							className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold text-ink-900 transition-opacity hover:opacity-85"
						>
							만든 것 보기
						</Link>
						<a
							href={`mailto:${PROFILE.email}`}
							className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:border-white/60"
						>
							{PROFILE.email}
						</a>
					</div>
				</div>

				<div className="lg:w-[52%]">
					<AssemblyStage />
				</div>
			</div>
		</section>
	);
};
