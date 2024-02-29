import type { NextPage, Metadata } from 'next';
import { Home } from '@/components/templates';

export const metadata: Metadata = {
    title: 'Devxian :: Post',
    description: 'SeokHyun Jang, a.k.a Devxian, is a software engineer who loves to build things.',
};

const PostPage: NextPage = () => {
    return <Home />;
};

export default PostPage;
