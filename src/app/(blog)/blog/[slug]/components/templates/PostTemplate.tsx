import { PostArticle } from '@/app/(blog)/blog/[slug]/components/organisms/PostArticle';
import { PostFooterNav } from '@/app/(blog)/blog/[slug]/components/organisms/PostFooterNav';
import { getPost } from '@/utils/posts';

interface Props {
	slug: string;
}

export const PostTemplate = ({ slug }: Props) => {
	const post = getPost(slug);

	return (
		<main>
			<PostArticle title={post.title} date={post.date} tags={post.tags} html={post.html} />
			<PostFooterNav currentSlug={slug} />
		</main>
	);
};
