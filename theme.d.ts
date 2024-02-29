import type { Theme } from '@/types';

declare module '@mui/styles' {
    export function useTheme(): Theme;
    export function createTheme(options: DesignTokens): Theme;
}
