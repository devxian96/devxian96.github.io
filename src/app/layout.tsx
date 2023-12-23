import type { NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Recoil } from '@/components/Recoil';
import { CssBaseLine } from '@/components/CssBaseLine';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ko">
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
