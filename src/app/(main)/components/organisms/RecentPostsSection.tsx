import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PostCard } from '@/components/molecules/PostCard';
import { SectionHeading } from '@/components/molecules/SectionHeading';
import { getPostMetas } from '@/utils/posts';

export const RecentPostsSection = () => {
	const posts = getPostMetas().slice(0, 2);

	if (posts.length === 0) return null;

	return (
		<section id="blog" className="border-y bg-card/40">
			<div className="mx-auto max-w-5xl px-6 py-20">
				<SectionHeading
					index="06 / BLOG"
					title="쓴 것들"
					description="만들면서 걸렸던 것, 고치면서 알게 된 것."
				/>

				<div className="grid gap-4 sm:grid-cols-2">
					{posts.map((post) => (
						<PostCard
							key={post.slug}
							slug={post.slug}
							title={post.title}
							description={post.description}
							date={post.date}
							tags={post.tags}
						/>
					))}
				</div>

				<Link
					href="/blog"
					className="mt-8 inline-flex items-center gap-2 font-mono text-sm text-primary hover:underline"
				>
					글 전체 보기
					<ArrowRight className="size-4" />
				</Link>
			</div>
		</section>
	);
};
