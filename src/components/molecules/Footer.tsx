import { PROFILE } from '@/constants/profile';

export const Footer = () => {
	return (
		<footer className="border-t">
			<div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
				<p className="font-mono text-sm text-muted-foreground">
					© {PROFILE.handle} · {PROFILE.nameEn}
				</p>
				<p className="font-mono text-sm text-primary">{PROFILE.taglineEn}</p>
			</div>
		</footer>
	);
};
