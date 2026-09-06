import type { PropsWithChildren } from 'react';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/organisms/Header/Header';

/**
 * 문서형 페이지의 공통 껍데기. 홈은 분할 무대라 헤더·푸터 없이 자기 chrome을 쓰므로
 * 루트 레이아웃이 아니라 여기서 감싼다.
 */
const SubLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className="flex flex-1 flex-col">{children}</div>
			<Footer />
		</>
	);
};

export default SubLayout;
