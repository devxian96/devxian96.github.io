import { PostArticle } from '@/app/(blog)/blog/[slug]/components/organisms/PostArticle';
import { getPost } from '@/utils/posts';

interface Props {
	slug: string;
}

export const PostTemplate = ({ slug }: Props) => {
	const post = getPost(slug);

	return (
		<main>
			<PostArticle title={post.title} date={post.date} tags={post.tags} html={post.html} />
		</main>
	);
};
