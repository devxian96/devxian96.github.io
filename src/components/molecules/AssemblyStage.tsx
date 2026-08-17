'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ASSEMBLY_BLOCKS } from '@/constants/assembly';

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

/**
 * 실제로 만든 화면 위에 편집 UI가 얹히는 장면.
 *
 * 회색 와이어프레임 대신 실서비스 스크린샷을 바탕에 깐다(진정성).
 * 그 위로 블록 선택 영역이 순서대로 스냅되면서, "이 사람은 만드는 도구를 만든다"를
 * 문장이 아니라 화면으로 보여준다(show, don't tell).
 *
 * 스크린샷은 처음부터 보인다. 움직이는 건 선택 영역뿐이라 모션이 돌지 않아도 결과물은 그대로다.
 */
export const AssemblyStage = () => {
	return (
		<div className="overflow-hidden rounded-xl border border-white/12 bg-ink-800 shadow-[0_40px_100px_-40px_rgb(0_0_0/0.9)]">
			<div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
				<span className="size-2 rounded-full bg-white/20" aria-hidden />
				<span className="size-2 rounded-full bg-white/20" aria-hidden />
				<span className="size-2 rounded-full bg-white/20" aria-hidden />
				<span className="ml-3 font-mono text-[11px] text-white/35">homebuilder.cafe24.com</span>
			</div>

			<div className="relative aspect-video">
				<Image
					src="/images/works/homebuilder.jpg"
					alt="직접 만든 카페24 AI 홈페이지 빌더 화면. 상단 메뉴와 헤드라인, 생성된 홈페이지 미리보기가 놓여 있다."
					fill
					priority
					sizes="(min-width: 1024px) 46vw, 100vw"
					className="object-cover object-top"
				/>

				{ASSEMBLY_BLOCKS.map((block) => (
					<motion.div
						key={block.order}
						aria-hidden
						initial={{ x: block.fromX, y: block.fromY, opacity: 0 }}
						animate={{ x: 0, y: 0, opacity: 1 }}
						transition={{ duration: 0.9, ease: EASE_OUT_EXPO, delay: 0.5 + block.order * 0.16 }}
						style={{
							left: `${block.left}%`,
							top: `${block.top}%`,
							width: `${block.width}%`,
							height: `${block.height}%`,
						}}
						className="absolute rounded-sm border border-primary/70 bg-primary/8"
					>
						<span className="absolute -top-px left-0 hidden -translate-y-full rounded-t-sm bg-primary px-1.5 py-0.5 text-[10px] font-bold whitespace-nowrap text-ink-950 sm:block">
							{block.label}
						</span>
					</motion.div>
				))}
			</div>
		</div>
	);
};
