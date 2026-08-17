import { STATS } from '@/constants/stats';

/**
 * 히어로의 주장을 받아 한 문단으로 풀고, 곧바로 셀 수 있는 숫자로 뒷받침한다.
 * 지표는 테두리 친 타일이 아니라 본문과 같은 격에 놓인 큰 숫자다 —
 * 대시보드 위젯처럼 보이면 이력이 아니라 장식으로 읽힌다.
 */
export const ThesisSection = () => {
	return (
		<section className="mx-auto max-w-6xl px-6 section-y">
			<p className="max-w-4xl text-[clamp(1.35rem,2.6vw,2rem)] leading-[1.6] tracking-[-0.02em]">
				프레임워크가 없어서 만들었고, 라이브러리가 아쉬워서 만들었습니다. 지금은 코드를 못 쓰는 사람도 자기
				웹사이트를 가질 수 있는 도구를 만듭니다.
			</p>

			<dl className="mt-20 grid gap-12 border-t pt-12 sm:grid-cols-3 sm:gap-8">
				{STATS.map((stat) => (
					<div key={stat.label} className="flex flex-col gap-2">
						<dd className="font-display text-[clamp(2.5rem,5vw,3.75rem)] leading-none tracking-[-0.03em]">
							{stat.value}
						</dd>
						<dt className="text-sm text-muted-foreground">{stat.label}</dt>
					</div>
				))}
			</dl>
		</section>
	);
};
