import Link from 'next/link';
import { PROFILE } from '@/constants/profile';

export const Footer = () => {
	return (
		<footer className="border-t bg-card">
			<div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:justify-between">
				<div className="flex flex-col gap-2">
					<p className="font-display text-lg tracking-[-0.02em]">{PROFILE.tagline}</p>
					<p className="text-sm text-muted-foreground">
						{PROFILE.name} · {PROFILE.nameEn} — {PROFILE.location}
					</p>
					<nav className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm" aria-label="사이트 문서">
						<Link href="/changelog" className="text-muted-foreground hover:text-foreground">
							변경 이력
						</Link>
						<Link href="/license" className="text-muted-foreground hover:text-foreground">
							라이선스
						</Link>
					</nav>
				</div>

				<div className="flex flex-col gap-1 font-mono text-sm text-muted-foreground sm:items-end">
					<a href={`mailto:${PROFILE.email}`} className="hover:text-foreground">
						{PROFILE.email}
					</a>
					<a href={PROFILE.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
						github.com/{PROFILE.handle}
					</a>
					<a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
						linkedin.com/in/devxian
					</a>
					<span className="mt-2">© {PROFILE.handle}</span>
				</div>
			</div>
		</footer>
	);
};
