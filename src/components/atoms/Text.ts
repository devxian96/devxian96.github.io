import styled from '@emotion/styled';
import type { Style } from '@/types';

interface Props extends Style {
    size?: 'small' | 'medium' | 'large' | 'xLarge' | 'xxLarge';
}

export const Text = styled.p<Props>`
    ${({ size }) => size === 'small' && `font-size: 12px;`}
    ${({ size }) => size === 'medium' || (!size && `font-size: 16px;`)}
    ${({ size }) => size === 'large' && `font-size: 20px;`}
    ${({ size }) => size === 'xLarge' && `font-size: 24px;`}
    ${({ size }) => size === 'xxLarge' && `font-size: 32px;`}
    line-height: 1.5;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    ${({ sx }) => sx}
`;
