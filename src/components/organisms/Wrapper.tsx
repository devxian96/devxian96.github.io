import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/system';
import { Header, Main, Footer } from '@/components/molecules';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};
