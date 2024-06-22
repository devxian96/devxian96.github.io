import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';
import { Footer } from './Footer';
import { Header } from './Header';
import { Main } from './Main';

const style = {
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '100vw',
        minHeight: '100vh',
    },
};

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container maxWidth={false} disableGutters sx={style.wrapper}>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </Container>
    );
};
