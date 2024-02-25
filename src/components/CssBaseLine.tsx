'use client';

import type { FC } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/system';

export const CssBaseLine: FC = () => {
    const theme = useTheme();

    return (
        <Global
            styles={css`
                ${emotionReset}

                *, *::after, *::before {
                    box-sizing: border-box;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                    font-smoothing: antialiased;
                    font-family: ${theme.typography.fontFamily.notoSans};
                    color: ${theme.palette.text};
                    font-size: ${theme.typography.fontSize.medium};
                    line-height: 1.5;
                }

                body {
                    background-color: ${theme.palette.background};
                }

                a {
                    text-decoration: none;
                    color: ${theme.palette.text};
                }
            `}
        />
    );
};
