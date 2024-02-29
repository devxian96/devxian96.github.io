import type { PaletteMode } from '@/types';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: {
                      main: '#1976D2',
                  },
                  secondary: {
                      main: '#efefef',
                  },
                  background: {
                      main: '#ffffff', // 배경색 지정
                  },
                  text: {
                      main: '#000000', // 기본 텍스트 색상 지정
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: '#81E6D9',
                  },
                  secondary: {
                      main: '#202023',
                  },
                  background: {
                      main: '#121212', // 배경색 지정
                  },
                  text: {
                      main: '#ffffff', // 기본 텍스트 색상 지정
                  },
              }),
    },
    typography: {
        xLarge: {
            fontSize: 28,
        },
        xsLarge: {
            fontSize: 24,
        },
        xxsLarge: {
            fontSize: 20,
        },
        Large: {
            fontSize: 16,
        },
        medium: {
            fontSize: 14,
        },
        small: {
            fontSize: 12,
        },
        fontFamily: {
            notoSans: "'Noto Sans KR', sans-serif",
        },
    },
});
