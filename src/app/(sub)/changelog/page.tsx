import type { Metadata } from 'next';
import { ChangelogTemplate } from '@/app/(sub)/changelog/components/templates/ChangelogTemplate';

export const metadata: Metadata = {
	title: '변경 이력',
	description: 'devxian96.github.io의 릴리스별 변경 내역.',
};

const ChangelogPage = () => <ChangelogTemplate />;

export default ChangelogPage;
