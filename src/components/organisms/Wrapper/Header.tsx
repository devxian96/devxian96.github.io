import type { FC } from 'react';
import { Container, Stack } from '@mui/system';
import { BENTO_STYLE, COLOR } from '@/constants';
import { Nav, Logo } from '@/components/molecules';

const style = {
    header: {
        ...BENTO_STYLE,
        backgroundColor: COLOR.secondary100,
        backdropFilter: 'blur(10px)',
        height: '50px',
        position: 'sticky',
        top: 10,
        zIndex: 2,
        mb: 3,
    },
};

export const Header: FC = () => {
    return (
        <Container component="header" sx={style.header}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Logo />
                <Nav />
            </Stack>
        </Container>
    );
};
