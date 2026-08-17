import type { Metadata } from 'next';
import { AboutTemplate } from '@/app/(sub)/about/components/templates/AboutTemplate';

export const metadata: Metadata = {
	title: 'devxian96 :: About',
	description: '장석현(Seokhyun Jang)이 어떤 길을 지나 지금 무엇을 만들고 있는지.',
};

const AboutPage = () => <AboutTemplate />;

export default AboutPage;
