import type { FC, PropsWithChildren } from 'react';
import { useMemo } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/system';
import { getDesignTokens } from '@/utils';
import { useThemeState } from '@/stores';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mode] = useThemeState();

    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <AppRouterCacheProvider>
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </AppRouterCacheProvider>
    );
};
