'use client';

import type { PropsWithChildren } from 'react';
import { motion } from 'motion/react';

/**
 * 형광펜 스와이프. 페이지에서 딱 두 번 쓴다 — 히어로의 주장과 마지막 클로징.
 * 둘이 같은 모션으로 페이지를 여닫는 수미상관이라, 세 번째로 쓰는 순간 강조가 죽는다.
 *
 * 글자는 처음부터 보인다. 칠해지는 건 배경 막대뿐이라 모션이 안 돌아도 읽히는 데 문제가 없다.
 */
export const Marker = ({ children }: PropsWithChildren) => {
	return (
		<span className="relative inline-block">
			<motion.span
				aria-hidden
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true, amount: 0.7 }}
				transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
				className="absolute inset-x-[-0.08em] bottom-[0.14em] h-[0.26em] origin-left bg-primary/65"
			/>
			<span className="relative">{children}</span>
		</span>
	);
};
