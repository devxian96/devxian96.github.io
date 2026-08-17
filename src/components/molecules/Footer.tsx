import { PROFILE } from '@/constants/profile';

export const Footer = () => {
	return (
		<footer className="border-t bg-card">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
				<div className="flex flex-col gap-2">
					<p className="font-display text-lg tracking-[-0.02em]">{PROFILE.tagline}</p>
					<p className="text-sm text-muted-foreground">
						{PROFILE.name} · {PROFILE.nameEn} — {PROFILE.location}
					</p>
				</div>

				<div className="flex flex-col gap-1 font-mono text-sm text-muted-foreground sm:items-end">
					<a href={`mailto:${PROFILE.email}`} className="hover:text-foreground">
						{PROFILE.email}
					</a>
					<a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
						github.com/{PROFILE.handle}
					</a>
					<span>© {PROFILE.handle}</span>
				</div>
			</div>
		</footer>
	);
};
