import styled from '@emotion/styled';
import { FONT_FAMILY, FONT_SIZE, COLOR } from '@/constants';
import type { Style } from '@/types';

interface Props extends Style {
    size?: keyof typeof FONT_SIZE;
    lineHeight?: number | string;
    color?: keyof typeof COLOR;
}

export const Text = styled.p<Props>`
    color: ${({ color }) => COLOR[color || 'white100']};
    ${({ size }) => FONT_SIZE[size || 'medium']};
    line-height: ${({ lineHeight }) => lineHeight || 1.5};
    margin: 0;
    font-family: ${FONT_FAMILY.notoSans};
    ${({ sx }) => sx}
`;
