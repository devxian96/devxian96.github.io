interface Props {
	period: string;
	org: string;
	role: string;
	description: string;
}

export const TimelineItem = ({ period, org, role, description }: Props) => {
	return (
		<li className="relative border-l pb-10 pl-8 last:pb-0">
			<span className="absolute top-1.5 left-[-5px] size-2.5 rounded-full bg-primary" />
			<span className="font-mono text-xs tracking-wider text-muted-foreground">{period}</span>
			<h3 className="mt-2 flex flex-wrap items-baseline gap-2 text-lg font-semibold">
				{org}
				<span className="font-mono text-xs font-normal text-primary">{role}</span>
			</h3>
			<p className="mt-2 max-w-2xl text-sm/relaxed text-muted-foreground">{description}</p>
		</li>
	);
};
