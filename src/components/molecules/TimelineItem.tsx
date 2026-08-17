interface Props {
	period: string;
	title: string;
	description: string;
}

export const TimelineItem = ({ period, title, description }: Props) => {
	return (
		<li className="relative border-l pb-10 pl-8 last:pb-0">
			<span className="absolute top-1.5 left-[-5px] size-2.5 rounded-full bg-primary" />
			<span className="font-mono text-xs tracking-wider text-muted-foreground">{period}</span>
			<h3 className="mt-2 text-lg font-semibold">{title}</h3>
			<p className="mt-2 max-w-2xl text-sm/relaxed text-muted-foreground">{description}</p>
		</li>
	);
};
