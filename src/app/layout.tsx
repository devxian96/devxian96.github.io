import type { NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { Recoil } from '@/components/atoms';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="ko">
			<body>
				<Recoil>{children}</Recoil>
			</body>
		</html>
	);
};

export default RootLayout;
