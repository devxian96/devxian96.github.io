interface Props {
	index: string;
	title: string;
	description?: string;
}

export const SectionHeading = ({ index, title, description }: Props) => {
	return (
		<header className="mb-10 flex flex-col gap-3">
			<span className="font-mono text-sm tracking-widest text-primary">{index}</span>
			<h2 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h2>
			{description ? <p className="max-w-2xl text-base text-muted-foreground">{description}</p> : null}
		</header>
	);
};
