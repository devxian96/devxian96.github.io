import type { PaletteMode } from '@/types';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: '#1976D2',
                  secondary: '#efefef',
                  background: '#ffffff',
                  text: '#000000',
              }
            : {
                  // palette values for dark mode
                  primary: '#81E6D9',
                  secondary: '#202023',
                  background: '#121212',
                  text: '#ffffff',
              }),
    },
    typography: {
        fontSize: {
            xLarge: '28px',
            xsLarge: '24px',
            xxsLarge: '20px',
            Large: '16px',
            medium: '14px',
            small: '12px',
        },
        fontFamily: {
            notoSans: "'Noto Sans KR', sans-serif",
        },
    },
});
