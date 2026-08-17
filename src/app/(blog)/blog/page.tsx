import type { Metadata } from 'next';
import { BlogListTemplate } from '@/app/(blog)/blog/components/templates/BlogListTemplate';

export const metadata: Metadata = {
	title: 'Blog',
	description: '만들면서 걸렸던 것, 고치면서 알게 된 것을 적어둡니다.',
};

const BlogPage = () => <BlogListTemplate />;

export default BlogPage;
