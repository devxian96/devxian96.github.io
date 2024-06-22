import type { FC } from 'react';
import { Container, Stack } from '@mui/material';
import { Nav, Logo } from '@/components/molecules';

export const Header: FC = () => {
    const style = {
        header: {
            height: '50px',
            position: 'sticky',
            zIndex: 2,
            mb: 3,
        },
    };

    return (
        <Container component="header" sx={style.header} maxWidth={false} disableGutters>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Nav />
            </Stack>
        </Container>
    );
};
