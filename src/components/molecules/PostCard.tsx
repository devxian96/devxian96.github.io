import Link from 'next/link';
import { formatPostDate } from '@/utils/posts';

interface Props {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
}

export const PostCard = ({ slug, title, description, date, tags }: Props) => {
	return (
		<Link
			href={`/blog/${slug}`}
			className="group flex flex-col gap-3 rounded-card border bg-card p-6 transition-colors hover:border-primary/60"
		>
			<time dateTime={date} className="font-mono text-xs tracking-wider text-muted-foreground">
				{formatPostDate(date)}
			</time>
			<h3 className="font-display text-xl tracking-tight transition-colors group-hover:text-primary">{title}</h3>
			<p className="text-sm/relaxed text-muted-foreground">{description}</p>
			<div className="mt-auto flex flex-wrap gap-2 pt-2">
				{tags.map((tag) => (
					<span
						key={tag}
						className="rounded-full border border-primary/30 px-2.5 py-0.5 font-mono text-xs text-primary"
					>
						{tag}
					</span>
				))}
			</div>
		</Link>
	);
};
