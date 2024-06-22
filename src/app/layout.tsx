'use client';

import type { PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import { CssBaseline } from '@mui/material';
import { Recoil } from '@/components/Recoil';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Wrapper } from '@/components/organisms';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="128x128" />
            </head>
            <body>
                <Recoil>
                    <ThemeProvider>
                        <CssBaseline />
                        <Wrapper>{children}</Wrapper>
                    </ThemeProvider>
                </Recoil>
            </body>
        </html>
    );
};

export default RootLayout;
