import type { FC, PropsWithChildren } from 'react';
import { RecoilRoot } from 'recoil';

export const Recoil: FC<PropsWithChildren> = ({ children }) => {
    return <RecoilRoot>{children}</RecoilRoot>;
};
