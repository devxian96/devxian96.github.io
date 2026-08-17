import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface Props {
	name: string;
	reason: string;
	stack: string;
	href: string;
	logo?: string;
}

export const WorkCard = ({ name, reason, stack, href, logo }: Props) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			className="group relative flex flex-col gap-3 rounded-card border bg-card p-6 transition-colors hover:border-primary/60"
		>
			<div className="flex items-start justify-between gap-4">
				<div className="flex items-center gap-3">
					{logo ? (
						<Image
							src={logo}
							alt=""
							width={40}
							height={40}
							className="size-10 rounded-md bg-white object-contain p-1"
						/>
					) : null}
					<h3 className="font-mono text-lg font-semibold tracking-tight">{name}</h3>
				</div>
				<ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
			</div>
			<p className="text-sm/relaxed text-muted-foreground">{reason}</p>
			<span className="mt-auto w-fit rounded-full border border-primary/30 px-2.5 py-0.5 font-mono text-xs text-primary">
				{stack}
			</span>
		</a>
	);
};
