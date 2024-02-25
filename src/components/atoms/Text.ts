import styled from '@emotion/styled';
import type { Style, Theme } from '@/types';

interface Props extends Style {
    size?: keyof Theme['typography']['fontSize'];
    lineHeight?: number | string;
    color?: keyof Theme['palette'];
    backgroundColor?: keyof Theme['palette'];
    gutter?: string;
    rounded?: boolean;
}

/**
 * 기본 텍스트 컴포넌트
 * @example
 * <Text size="large" color="white100" lineHeight={1.5} sx={{ fontWeight: 700 }}>Hello World</Text>
 */
export const Text = styled.p<Props>(({ theme, color, backgroundColor, size, lineHeight, gutter, rounded, sx }) => {
    const typedTheme = theme as Theme;

    return {
        color: color ? typedTheme.palette[color] : 'palette.text',
        backgroundColor: backgroundColor ? typedTheme.palette[backgroundColor] : 'transparent',
        fontSize: size ? typedTheme.typography.fontSize[size] : typedTheme.typography.fontSize.medium,
        lineHeight: lineHeight || 1.5,
        margin: 0,
        fontFamily: typedTheme.typography.fontFamily.notoSans,
        paddingLeft: gutter || 0,
        paddingRight: gutter || 0,
        borderRadius: rounded ? '0.5rem' : undefined,
        ...sx,
    };
});
