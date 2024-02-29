import type { NextPage, Metadata } from 'next';
import { Home } from '@/components/templates';

export const metadata: Metadata = {
    title: 'Devxian :: About',
    description: 'SeokHyun Jang, a.k.a Devxian, is a software engineer who loves to build things.',
};

const AboutPage: NextPage = () => {
    return <Home />;
};

export default AboutPage;
