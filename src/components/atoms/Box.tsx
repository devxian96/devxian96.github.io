import type { FC, PropsWithChildren, ElementType } from 'react';
import { Container } from '@mui/material';
import { useTheme } from '@mui/styles';
import type { Style } from '@/types';
import { BENTO_STYLE } from '@/constants';

interface Props extends PropsWithChildren, Style {
    component: ElementType;
    disabledBento?: boolean;
    fullWidth?: boolean;
}

export const Box: FC<Props> = ({ children, component, disabledBento, fullWidth, sx }) => {
    const theme = useTheme();

    const style = {
        box: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 0,
            ...(fullWidth ? { width: '100%' } : { width: 'auto' }),
            ...(disabledBento && BENTO_STYLE[theme.palette.mode]),
            ...sx,
        },
    };

    return (
        <Container component={component} sx={style.box} disableGutters maxWidth={false}>
            {children}
        </Container>
    );
};
