import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};
