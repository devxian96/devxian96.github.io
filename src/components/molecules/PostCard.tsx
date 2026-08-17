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
			className="group grid items-baseline gap-2 border-t py-7 transition-colors hover:bg-card md:grid-cols-[8rem_1fr] md:gap-8 md:px-4"
		>
			<time dateTime={date} className="font-mono text-sm text-muted-foreground">
				{formatPostDate(date)}
			</time>
			<span className="flex flex-col gap-2">
				<span className="text-lg font-bold transition-colors group-hover:text-primary">{title}</span>
				<span className="measure text-sm/relaxed text-muted-foreground">{description}</span>
				<span className="mt-1 flex flex-wrap gap-x-3 text-xs text-muted-foreground">
					{tags.map((tag) => (
						<span key={tag}>#{tag}</span>
					))}
				</span>
			</span>
		</Link>
	);
};
