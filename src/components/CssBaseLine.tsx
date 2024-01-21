'use client';

import type { FC } from 'react';
import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import { COLOR, FONT_SIZE, FONT_FAMILY } from '@/constants';

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
                    font-family: ${FONT_FAMILY.notoSans};
                    color: ${COLOR.white100};
                    font-size: ${FONT_SIZE.medium};
                    line-height: 1.5;
                }

                body {
                    background-color: ${COLOR.secondary100};
                }

                a {
                    text-decoration: none;
                    color: ${COLOR.primary100};
                }
            `}
        />
    );
};
