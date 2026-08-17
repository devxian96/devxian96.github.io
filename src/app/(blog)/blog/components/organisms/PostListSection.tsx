import { PostCard } from '@/components/molecules/PostCard';
import { SectionTitle } from '@/components/molecules/SectionTitle';
import { getPostMetas } from '@/utils/posts';

export const PostListSection = () => {
	const posts = getPostMetas();

	return (
		<section className="mx-auto max-w-6xl px-6 section-y">
			<SectionTitle title="쓴 것" description="만들면서 걸렸던 것, 고치면서 알게 된 것을 적어둡니다." />

			<div className="flex flex-col border-b">
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
