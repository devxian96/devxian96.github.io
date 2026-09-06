import type { PropsWithChildren } from 'react';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/organisms/Header/Header';

/** (sub)와 같은 껍데기. 라우트 그룹이 달라 파일이 둘이다. */
const BlogLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Header />
			<div className="flex flex-1 flex-col">{children}</div>
			<Footer />
		</>
	);
};

export default BlogLayout;
