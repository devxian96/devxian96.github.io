import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type ThemeMode = 'light' | 'dark';

interface ThemeModel {
	mode: ThemeMode;
	setMode: (mode: ThemeMode) => void;
	toggleMode: () => void;
}

/**
 * 테마 상태. buzzle-landing의 userModel과 같은 이유로 `skipHydration: true`다 —
 * 정적 export된 HTML은 서버가 localStorage를 볼 수 없으므로, 자동 hydration을 켜두면
 * 서버 마크업(기본값)과 클라이언트 첫 렌더(저장값)가 어긋나 hydration mismatch가 난다.
 * rehydrate()는 `useTheme`에서 마운트 후 수동으로 호출한다.
 */
export const useThemeModel = create<ThemeModel>()(
	persist(
		(set, get) => ({
			mode: 'dark',
			setMode: (mode) => set({ mode }),
			toggleMode: () => set({ mode: get().mode === 'dark' ? 'light' : 'dark' }),
		}),
		{
			name: 'devxian96-theme',
			storage: createJSONStorage(() => localStorage),
			skipHydration: true,
		},
	),
);
