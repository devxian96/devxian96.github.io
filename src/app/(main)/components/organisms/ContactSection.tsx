import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { SectionHeading } from '@/components/molecules/SectionHeading';
import { PROFILE } from '@/constants/profile';

export const ContactSection = () => {
	return (
		<section id="contact" className="mx-auto max-w-5xl px-6 py-20">
			<SectionHeading index="07 / CONTACT" title="연락" description="만들 게 있으면 알려주세요." />

			<div className="flex flex-wrap gap-3">
				<Button asChild size="lg">
					<a href={`mailto:${PROFILE.email}`}>
						<Mail />
						{PROFILE.email}
					</a>
				</Button>
				<Button asChild size="lg" variant="outline">
					<a href={PROFILE.github} target="_blank" rel="noreferrer">
						<Github />
						{PROFILE.handle}
					</a>
				</Button>
				<Button asChild size="lg" variant="outline">
					<a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
						<Linkedin />
						LinkedIn
					</a>
				</Button>
			</div>
		</section>
	);
};
