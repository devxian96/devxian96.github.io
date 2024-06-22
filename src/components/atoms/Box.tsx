import type { FC, PropsWithChildren, ElementType } from 'react';
import { Container } from '@mui/material';
import type { Style } from '@/types';

interface Props extends PropsWithChildren, Style {
    component: ElementType;
    fullWidth?: boolean;
}

export const Box: FC<Props> = ({ children, component, fullWidth, sx }) => {
    const style = {
        box: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 0,
            ...(fullWidth ? { width: '100%' } : { width: 'auto' }),
            ...sx,
        },
    };

    return (
        <Container component={component} sx={style.box} disableGutters maxWidth={false}>
            {children}
        </Container>
    );
};
