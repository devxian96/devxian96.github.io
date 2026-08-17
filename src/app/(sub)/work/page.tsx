import type { Metadata } from 'next';
import { WorkTemplate } from '@/app/(sub)/work/components/templates/WorkTemplate';

export const metadata: Metadata = {
	title: '만든 것',
	description: '장석현이 카페24와 팀, 주말 프로젝트에서 만든 서비스와 직접 공개한 오픈소스.',
};

const WorkPage = () => <WorkTemplate />;

export default WorkPage;
