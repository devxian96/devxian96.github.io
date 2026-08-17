import type { Metadata } from 'next';
import { LicenseTemplate } from '@/app/(sub)/license/components/templates/LicenseTemplate';

export const metadata: Metadata = {
	title: '라이선스',
	description: 'devxian96.github.io 소스 코드의 MIT 라이선스 원문.',
};

const LicensePage = () => <LicenseTemplate />;

export default LicensePage;
