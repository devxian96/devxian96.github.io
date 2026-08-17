import { PostCard } from '@/components/molecules/PostCard';
import { SectionHeading } from '@/components/molecules/SectionHeading';
import { getPostMetas } from '@/utils/posts';

export const PostListSection = () => {
	const posts = getPostMetas();

	return (
		<section className="mx-auto max-w-5xl px-6 py-20">
			<SectionHeading
				index="BLOG"
				title="쓴 것들"
				description="만들면서 걸렸던 것, 고치면서 알게 된 것을 적어둡니다."
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
		</section>
	);
};
