'use client';

import type { FC } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { useTheme } from '@mui/styles';

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
                    font-family: ${theme.typography.fontFamily};
                    color: ${theme.palette.text.primary};
                    font-size: ${theme.typography.medium};
                    line-height: 1.5;
                }

                body {
                    background-color: ${theme.palette.background.main};
                }

                a {
                    text-decoration: none;
                    color: ${theme.palette.primary.main};
                    font-family: ${theme.typography.fontFamily};
                    font-size: ${theme.typography.medium};
                }
            `}
        />
    );
};
