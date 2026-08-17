interface Props {
	category: string;
	items: string;
}

export const StackRow = ({ category, items }: Props) => {
	return (
		<div className="flex flex-col gap-1 border-b py-4 last:border-b-0 sm:flex-row sm:gap-8">
			<span className="w-32 shrink-0 font-mono text-sm text-primary">{category}</span>
			<span className="text-sm text-muted-foreground">{items}</span>
		</div>
	);
};
