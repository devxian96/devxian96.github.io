'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CREDO, PROFILE } from '@/constants/profile';

export const HeroSection = () => {
	return (
		<section className="relative overflow-hidden border-b">
			<div className="pointer-events-none absolute inset-0 bg-dot-grid" aria-hidden />
			<div className="pointer-events-none absolute inset-0 bg-brand-glow" aria-hidden />
			<div className="absolute inset-y-0 left-0 w-[3px] bg-linear-to-b from-primary to-primary/20" aria-hidden />

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: 'easeOut' }}
				className="relative mx-auto flex max-w-5xl flex-col gap-8 px-6 py-24 sm:py-32 md:flex-row md:items-center md:gap-14"
			>
				<div className="flex flex-col gap-5">
					<span className="font-mono text-sm text-primary">$ whoami</span>

					<h1 className="font-mono text-5xl font-bold tracking-tighter sm:text-7xl">{PROFILE.handle}</h1>

					<div className="flex flex-col gap-1">
						<p className="text-lg">
							{PROFILE.name} · {PROFILE.nameEn}
						</p>
						<p className="text-sm text-muted-foreground">
							{PROFILE.role} @ {PROFILE.company} · {PROFILE.career}
						</p>
					</div>

					<span className="h-0.5 w-24 bg-linear-to-r from-primary to-transparent" aria-hidden />

					<div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
						<p className="font-accent text-3xl text-primary sm:text-4xl">{PROFILE.tagline}</p>
						<p className="text-sm text-muted-foreground">{PROFILE.taglineEn}</p>
					</div>

					<p className="max-w-xl text-sm/relaxed text-muted-foreground">{CREDO.join(' ')}</p>
				</div>

				<div className="relative shrink-0">
					<div className="absolute -inset-3 rounded-full bg-primary/20 blur-2xl" aria-hidden />
					<Image
						src={PROFILE.avatar}
						alt={`${PROFILE.name} 프로필 사진`}
						width={220}
						height={220}
						priority
						className="relative size-40 rounded-full border-2 border-primary/40 object-cover sm:size-52"
					/>
				</div>
			</motion.div>
		</section>
	);
};
