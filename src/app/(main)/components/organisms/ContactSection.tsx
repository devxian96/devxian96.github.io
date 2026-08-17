import { Mail } from 'lucide-react';
import { GithubIcon } from '@/components/atoms/github-icon';
import { LinkedinIcon } from '@/components/atoms/linkedin-icon';
import { Marker } from '@/components/molecules/Marker';
import { PROFILE } from '@/constants/profile';

export const ContactSection = () => {
	return (
		<section id="contact" className="mx-auto max-w-6xl px-6 section-y">
			<div className="flex flex-col items-center gap-10 text-center">
				<h2 className="font-display text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.12] tracking-[-0.035em]">
					<Marker>그래서, 다음은</Marker>
					<br />
					무엇을 만들까요.
				</h2>

				<p className="measure text-lg/relaxed text-muted-foreground">
					없는 걸 만들어야 하는 자리라면 잘 맞습니다. 편하게 연락 주세요.
				</p>

				<div className="flex flex-wrap items-center justify-center gap-3">
					<a
						href={`mailto:${PROFILE.email}`}
						className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-bold text-background transition-opacity hover:opacity-85"
					>
						<Mail className="size-4" />
						{PROFILE.email}
					</a>
					<a
						href={PROFILE.github}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-colors hover:border-foreground"
					>
						<GithubIcon className="size-4" />
						GitHub
					</a>
					<a
						href={PROFILE.linkedin}
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-sm font-bold transition-colors hover:border-foreground"
					>
						<LinkedinIcon className="size-4" />
						LinkedIn
					</a>
				</div>
			</div>
		</section>
	);
};
