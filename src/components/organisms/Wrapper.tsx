import type { FC, PropsWithChildren } from 'react';
import { Header, Main, Footer } from '@/components/molecules';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
};
