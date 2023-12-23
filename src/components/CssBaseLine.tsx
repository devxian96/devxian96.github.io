'use client';

import type { FC } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

export const CssBaseLine: FC = () => {
    return (
        <Global
            styles={css`
                ${emotionReset}

                *, *::after, *::before {
                    box-sizing: border-box;
                    -moz-osx-font-smoothing: grayscale;
                    -webkit-font-smoothing: antialiased;
                    font-smoothing: antialiased;
                    font-family: 'Noto Sans KR', sans-serif;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }
            `}
        />
    );
};
