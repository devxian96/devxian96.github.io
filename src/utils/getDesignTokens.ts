import type { PaletteMode } from '@/types';

export const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: '#1976D2',
                  secondary: '#81D4FA',
                  text: '#000000',
              }
            : {
                  // palette values for dark mode
                  primary: '#81E6D9',
                  secondary: '#202023',
                  text: '#ffffff',
              }),
    },
});
