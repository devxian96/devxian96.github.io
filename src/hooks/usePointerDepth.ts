'use client';

import { useEffect, useRef } from 'react';

/**
 * 포인터 위치를 -1..1로 정규화해 요소의 --px/--py에 쓴다. 층(plane)마다 다른 --depth를
 * 곱해 방이 살짝 기울듯 반응하게 한다. 호버 가능한 정밀 포인터에서만, reduced motion이면 꺼진다.
 * 터치는 절대 잡지 않는다. 포인터 없이도 장면은 완성되어 있어야 한다.
 */
export const usePointerDepth = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const room = ref.current;
		const canHover = matchMedia('(hover: hover) and (pointer: fine)').matches;
		const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

		if (!room || !canHover || reduced) {
			return undefined;
		}

		const move = (event: PointerEvent) => {
			const rect = room.getBoundingClientRect();
			const px = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
			const py = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

			room.style.setProperty('--px', px.toFixed(3));
			room.style.setProperty('--py', py.toFixed(3));
		};

		const leave = () => {
			room.style.setProperty('--px', '0');
			room.style.setProperty('--py', '0');
		};

		room.addEventListener('pointermove', move, { passive: true });
		room.addEventListener('pointerleave', leave);

		return () => {
			room.removeEventListener('pointermove', move);
			room.removeEventListener('pointerleave', leave);
		};
	}, []);

	return ref;
};
