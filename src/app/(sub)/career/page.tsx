import type { Metadata } from 'next';
import { CareerTemplate } from '@/app/(sub)/career/components/templates/CareerTemplate';

export const metadata: Metadata = {
	title: '지나온 길',
	description: '장석현의 경력 6년 11개월 — 소속, 기간, 만든 것, 그리고 쓰는 기술.',
};

const CareerPage = () => <CareerTemplate />;

export default CareerPage;
