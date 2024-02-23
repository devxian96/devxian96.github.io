import { atom, useRecoilState } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import type { PaletteMode } from '@/types';

const key = 'themeState';
const localStorage = typeof window !== 'undefined' ? window.localStorage : undefined;

const { persistAtom } = recoilPersist({
    key,
    storage: localStorage,
});

const themeState = atom<PaletteMode>({
    key,
    default: 'light',
    effects_UNSTABLE: [persistAtom],
});

export const useThemeState = () => useRecoilState(themeState);
