import type { Theme } from '@/types';

declare module '@mui/system' {
    export function useTheme(): Theme;
    export function createTheme(options: DesignTokens): Theme;
}
