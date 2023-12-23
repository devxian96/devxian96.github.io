import type { NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Recoil } from '@/components/Recoil';
import { CssBaseLine } from '@/components/CssBaseLine';
import { Header, Footer, Main } from '@/components/organisms';

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
    return (
        <html lang="ko">
            <body>
                <AppRouterCacheProvider>
                    <CssBaseLine />
                    <Recoil>
                        <Header />
                        <Main>{children}</Main>
                        <Footer />
                    </Recoil>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
};

export default RootLayout;
