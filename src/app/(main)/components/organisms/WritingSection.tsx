import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { formatPostDate, getPostMetas } from '@/utils/posts';

export const WritingSection = () => {
	const posts = getPostMetas().slice(0, 3);

	if (posts.length === 0) return null;

	return (
		<section id="writing" className="border-y bg-card">
			<div className="mx-auto max-w-6xl px-6 section-y">
				<SectionTitle title="쓴 것" description="만들면서 걸렸던 것, 고치면서 알게 된 것." />

				<div className="flex flex-col border-b">
					{posts.map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group grid items-baseline gap-2 border-t py-6 transition-colors hover:bg-background md:grid-cols-[8rem_1fr] md:gap-8 md:px-4"
						>
							<time dateTime={post.date} className="font-mono text-sm text-muted-foreground">
								{formatPostDate(post.date)}
							</time>
							<span className="flex flex-col gap-1.5">
								<span className="text-lg font-bold transition-colors group-hover:text-primary">
									{post.title}
								</span>
								<span className="measure text-sm/relaxed text-muted-foreground">
									{post.description}
								</span>
							</span>
						</Link>
					))}
				</div>

				<Link
					href="/blog"
					className="mt-8 inline-flex items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
				>
					글 전체 보기
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</section>
	);
};
