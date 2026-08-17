import type { Metadata } from 'next';
import { HomeTemplate } from '@/app/(main)/components/templates/HomeTemplate';

export const metadata: Metadata = {
	title: 'devxian96 :: 없으면 만든다',
	description: '장석현(Seokhyun Jang) — Cafe24에서 AI 홈페이지 빌더를 만드는 풀스택 엔지니어. 없으면 만드는 사람.',
};

const HomePage = () => <HomeTemplate />;

export default HomePage;
