import type { FC, PropsWithChildren } from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/styles';
import type { Style, Theme } from '@/types';

type Color = Exclude<keyof Theme['palette'], 'mode'>;

interface Props extends PropsWithChildren, Style {
    size?: keyof Theme['typography'];
    lineHeight?: number | string;
    color?: Color;
    backgroundColor?: Color;
    gutter?: string;
    rounded?: boolean;
}

/**
 * 기본 텍스트 컴포넌트
 * @example
 * <Text size="large" color="white100" lineHeight={1.5} sx={{ fontWeight: 700 }}>Hello World</Text>
 */
export const Text: FC<Props> = ({
    children,
    size = 'medium',
    lineHeight = 1.5,
    color = 'text',
    backgroundColor,
    gutter,
    rounded,
    sx,
}) => {
    const theme = useTheme();

    return (
        <Typography
            sx={{
                color: color ? theme.palette[color].main || theme.palette.text.main : theme.palette.text.main,
                backgroundColor: backgroundColor
                    ? theme.palette[backgroundColor]?.main || 'transparent'
                    : 'transparent',
                fontSize: size ? theme.typography[size] : theme.typography.medium,
                lineHeight: lineHeight || 1.5,
                margin: 0,
                fontFamily: theme.typography.fontFamily,
                paddingLeft: gutter || 0,
                paddingRight: gutter || 0,
                fontWeight: 500,
                paddingTop: 0.4,
                paddingBottom: 0.5,
                borderRadius: rounded ? '0.5rem' : undefined,
                ...sx,
            }}
        >
            {children}
        </Typography>
    );
};
