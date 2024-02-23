'use client';

import type { PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import { Recoil } from '@/components/Recoil';
import { CssBaseLine } from '@/components/CssBaseLine';
import { ThemeProvider } from '@/components/ThemeProvider';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="128x128" />
            </head>
            <body>
                <Recoil>
                    <CssBaseLine />
                    <ThemeProvider>{children}</ThemeProvider>
                </Recoil>
            </body>
        </html>
    );
};

export default RootLayout;
