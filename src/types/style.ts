import type { SerializedStyles } from '@emotion/react';

export interface Style {
    sx?: SerializedStyles | { [key: string]: string };
}

export type PaletteMode = 'dark' | 'light';
