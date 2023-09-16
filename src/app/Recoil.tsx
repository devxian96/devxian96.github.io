'use client';

import type { FC, ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
	children: ReactNode;
}

export const Recoil: FC<Props> = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};
