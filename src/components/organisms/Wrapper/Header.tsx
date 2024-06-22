import type { FC } from 'react';
import { Container, Stack } from '@mui/material';
import { Left, Middle, Right } from './HeaderMenu';

export const Header: FC = () => {
    const style = {
        header: {
            height: '40px',
            lineHeight: '40px',
            position: 'sticky',
            zIndex: 2,
            mb: 3,
        },
    };

    return (
        <Container component="header" sx={style.header} maxWidth={false}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Left />
                <Middle />
                <Right />
            </Stack>
        </Container>
    );
};
