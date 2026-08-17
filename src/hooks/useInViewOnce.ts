'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * 요소가 화면에 처음 들어온 순간을 한 번만 알려준다.
 *
 * 이거 하나 때문에 모션 라이브러리를 통째로 싣고 있었다(번들 40KB 남짓).
 * 필요한 건 "보이면 true"뿐이라 IntersectionObserver로 충분하다.
 * 지원하지 않는 환경에서는 처음부터 true로 두어, 연출이 없더라도 최종 상태는 같게 만든다.
 */
export const useInViewOnce = (threshold = 0.7) => {
	const ref = useRef<HTMLSpanElement>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const target = ref.current;

		if (!target || typeof IntersectionObserver === 'undefined') {
			setIsInView(true);

			return undefined;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				if (entries.some((entry) => entry.isIntersecting)) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{ threshold },
		);

		observer.observe(target);

		return () => observer.disconnect();
	}, [threshold]);

	return { ref, isInView };
};
