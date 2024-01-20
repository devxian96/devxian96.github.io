import styled from '@emotion/styled';
import { FONT_FAMILY, FONT_SIZE, COLOR } from '@/constants';
import type { Style } from '@/types';

interface Props extends Style {
    size?: keyof typeof FONT_SIZE;
    lineHeight?: number | string;
    color?: keyof typeof COLOR;
    backgroundColor?: keyof typeof COLOR;
    gutter?: string;
    rounded?: boolean;
}

/**
 * 기본 텍스트 컴포넌트
 * @example
 * <Text size="large" color="white100" lineHeight={1.5} sx={{ fontWeight: 700 }}>Hello World</Text>
 */
export const Text = styled.p<Props>`
    color: ${({ color }) => COLOR[color || 'white100']};
    ${({ backgroundColor }) => backgroundColor && `background-color: ${COLOR[backgroundColor]};`}
    ${({ size }) => FONT_SIZE[size || 'medium']};
    line-height: ${({ lineHeight }) => lineHeight || 1.5};
    margin: 0;
    font-family: ${FONT_FAMILY.notoSans};
    padding-left: ${({ gutter }) => gutter || 0};
    padding-right: ${({ gutter }) => gutter || 0};
    ${({ rounded }) => rounded && 'border-radius: 0.5rem;'}
    ${({ sx }) => sx}
`;
