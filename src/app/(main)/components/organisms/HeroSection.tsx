'use client';

import { motion } from 'motion/react';
import { PROFILE } from '@/constants/profile';

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
				className="relative mx-auto flex max-w-5xl flex-col gap-5 px-6 py-24 sm:py-32"
			>
				<span className="font-mono text-sm text-primary">$ whoami</span>

				<h1 className="font-mono text-5xl font-bold tracking-tighter sm:text-7xl">{PROFILE.handle}</h1>

				<div className="flex flex-col gap-1">
					<p className="text-lg">
						{PROFILE.name} · {PROFILE.nameEn}
					</p>
					<p className="text-sm text-muted-foreground">
						{PROFILE.role} @ {PROFILE.company} · {PROFILE.location}
					</p>
				</div>

				<span className="h-0.5 w-24 bg-linear-to-r from-primary to-transparent" aria-hidden />

				<div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-6">
					<p className="text-2xl font-bold text-primary sm:text-3xl">{PROFILE.tagline}</p>
					<p className="text-sm text-muted-foreground">{PROFILE.taglineEn}</p>
				</div>
			</motion.div>
		</section>
	);
};
