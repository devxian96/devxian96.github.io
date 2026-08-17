'use client';

import type { PropsWithChildren } from 'react';
import { useInViewOnce } from '@/hooks/useInViewOnce';

/**
 * 형광펜 스와이프. 페이지에서 딱 두 번 쓴다 — 히어로의 주장과 마지막 클로징.
 * 둘이 같은 모션으로 페이지를 여닫는 수미상관이라, 세 번째로 쓰는 순간 강조가 죽는다.
 *
 * 글자는 처음부터 보인다. 칠해지는 건 배경 막대뿐이라 모션이 안 돌아도 읽히는 데 문제가 없다.
 * 전환은 CSS transform 하나로 끝나므로 모션 라이브러리를 쓰지 않는다 —
 * 이 효과 하나 때문에 번들에 40KB를 싣고 있었다.
 */
export const Marker = ({ children }: PropsWithChildren) => {
	const { ref, isInView } = useInViewOnce();

	return (
		<span ref={ref} className="relative inline-block">
			<span
				aria-hidden
				data-visible={isInView}
				className="absolute inset-x-[-0.08em] bottom-[0.14em] h-[0.26em] origin-left scale-x-0 bg-primary/65 transition-transform delay-200 duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] data-[visible=true]:scale-x-100 motion-reduce:transition-none"
			/>
			<span className="relative">{children}</span>
		</span>
	);
};
