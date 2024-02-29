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
                      default: '#ffffff', // 기본 배경색 지정
                  },
                  text: {
                      main: '#000000', // 기본 텍스트 색상 지정
                      primary: '#000000', // 기본 텍스트 색상 지정
                      secondary: '#6c6c6c', // 부가 텍스트 색상 지정
                      disabled: '#9c9c9c', // 비활성 텍스트 색상 지정
                      hint: '#9c9c9c', // 힌트 텍스트 색상 지정
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
                      default: '#ffffff', // 기본 배경색 지정
                  },
                  text: {
                      main: '#ffffff', // 기본 텍스트 색상 지정
                      primary: '#ffffff', // 기본 텍스트 색상 지정
                      secondary: '#9c9c9c', // 부가 텍스트 색상 지정
                      disabled: '#6c6c6c', // 비활성 텍스트 색상 지정
                      hint: '#6c6c6c', // 힌트 텍스트 색상 지정
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
        fontFamily: "'Noto Sans KR', sans-serif",
    },
});
