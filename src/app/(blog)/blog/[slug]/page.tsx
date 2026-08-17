import type { Metadata } from 'next';
import { PostTemplate } from '@/app/(blog)/blog/[slug]/components/templates/PostTemplate';
import { getPost, getPostSlugs } from '@/utils/posts';

interface Props {
	params: Promise<{ slug: string }>;
}

export const generateStaticParams = () => getPostSlugs().map((slug) => ({ slug }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { slug } = await params;
	const post = getPost(slug);

	return { title: post.title, description: post.description };
};

const PostPage = async ({ params }: Props) => {
	const { slug } = await params;

	return <PostTemplate slug={slug} />;
};

export default PostPage;
