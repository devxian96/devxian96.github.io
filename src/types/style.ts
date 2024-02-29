import type { Theme as MUITheme } from '@mui/material';
import type { getDesignTokens } from '@/utils';

export interface Style {
    sx?: Record<string, string>;
}

export type PaletteMode = 'dark' | 'light';

type DesignTokens = ReturnType<typeof getDesignTokens>;
export type Theme = Omit<MUITheme, 'palette' | 'typography'> & DesignTokens;
