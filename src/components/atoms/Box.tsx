import { useMemo, type FC, type PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import type { Style } from '@/types';
import { BENTO_STYLE } from '@/constants';

interface Props extends PropsWithChildren, Style {
    component?: keyof HTMLElementTagNameMap;
    disabledBento?: boolean;
    fullWidth?: boolean;
}

export const Box: FC<Props> = ({ children, sx, component, disabledBento, fullWidth }) => {
    const Component = useMemo(
        () => styled(component ?? 'div')<Style>`
            ${fullWidth && 'width: 100%;'}
            ${!disabledBento && BENTO_STYLE}
            ${({ sx }) => sx}
            display: flex;
            flex-direction: row;
            justify-content: center;
        `,
        [component, sx, fullWidth, disabledBento],
    );

    return <Component sx={sx}>{children}</Component>;
};
