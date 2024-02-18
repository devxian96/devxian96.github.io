import type { PropsWithChildren } from 'react';
import type { NextPage } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Recoil } from '@/components/Recoil';
import { CssBaseLine } from '@/components/CssBaseLine';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ko">
            <head>
                <link rel="icon" href="/favicon.ico" sizes="128x128" />
            </head>
            <body>
                <AppRouterCacheProvider>
                    <CssBaseLine />
                    <Recoil>{children}</Recoil>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
