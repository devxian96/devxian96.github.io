import { useState, useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider as MuiThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '@/utils';
import { useThemeState } from '@/stores';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mode] = useThemeState();
    const [theme, setTheme] = useState(createTheme(getDesignTokens('light')));

    useEffect(() => {
        setTheme(createTheme(getDesignTokens(mode)));
    }, [mode]);

    return (
        <AppRouterCacheProvider options={{ key: 'dx' }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </AppRouterCacheProvider>
    );
};
