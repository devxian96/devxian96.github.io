import type { Theme } from '@/types';

declare module '@mui/material' {
    export function useTheme(): Theme;
    export function createTheme(options: DesignTokens): Theme;
}
