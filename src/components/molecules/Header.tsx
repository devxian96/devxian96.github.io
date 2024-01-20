import type { FC } from 'react';
import { Container } from '@mui/system';
import { Logo } from '@/components/atoms';
import { bentoStyle } from '@/constants';

const style = {
    header: {
        ...bentoStyle,
        backgroundColor: '#20202380',
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
            <Logo />
        </Container>
    );
};
