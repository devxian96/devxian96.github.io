interface Props {
	period: string;
	org: string;
	role: string;
	description: string;
}

export const TimelineItem = ({ period, org, role, description }: Props) => {
	return (
		<li className="relative border-l pb-9 pl-7 last:pb-0">
			<span className="absolute top-2 left-[-4.5px] size-2 rounded-full bg-foreground" aria-hidden />
			<span className="font-mono text-xs tracking-wide text-muted-foreground">{period}</span>
			<h3 className="mt-1.5 flex flex-wrap items-baseline gap-2 text-lg font-bold">
				{org}
				<span className="text-xs font-normal text-muted-foreground">{role}</span>
			</h3>
			<p className="mt-2 measure text-sm/relaxed text-muted-foreground">{description}</p>
		</li>
	);
};
