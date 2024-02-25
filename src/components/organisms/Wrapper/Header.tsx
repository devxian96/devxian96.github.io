import type { FC } from 'react';
import { Container, Stack, useTheme } from '@mui/system';
import { BENTO_STYLE } from '@/constants';
import { Nav, Logo } from '@/components/molecules';

export const Header: FC = () => {
    const theme = useTheme();

    const style = {
        header: {
            ...BENTO_STYLE[theme.palette.mode],
            backgroundColor: theme.palette.secondary,
            backdropFilter: 'blur(10px)',
            height: '50px',
            position: 'sticky',
            top: 10,
            zIndex: 2,
            mb: 3,
        },
    };

    return (
        <Container component="header" sx={style.header}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Nav />
            </Stack>
        </Container>
    );
};
