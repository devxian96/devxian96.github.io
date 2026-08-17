'use client';

import { useEffect } from 'react';
import type { ThemeMode } from '@/stores/themeModel';
import { useThemeModel } from '@/stores/themeModel';

const syncDocumentTheme = (mode: ThemeMode) => {
	document.documentElement.classList.toggle('dark', mode === 'dark');
};

/**
 * 테마 조회/전환 훅.
 *
 * DDD 룰상 organism은 raw React hook을 직접 못 쓰므로, rehydrate와 DOM 반영을
 * 여기서 모두 흡수해 organism에는 `{ mode, toggleMode }`만 넘긴다.
 *
 * subscribe를 rehydrate보다 먼저 거는 이유: rehydrate가 저장값을 적용하는 순간이
 * 곧 첫 동기화 시점이다. 순서를 뒤집으면 저장된 라이트 모드가 반영되기 전에
 * 다크 클래스가 한 프레임 남는다.
 */
export const useTheme = () => {
	const mode = useThemeModel((state) => state.mode);
	const toggleMode = useThemeModel((state) => state.toggleMode);

	useEffect(() => {
		const unsubscribe = useThemeModel.subscribe((state) => syncDocumentTheme(state.mode));
		void useThemeModel.persist.rehydrate();

		return unsubscribe;
	}, []);

	return { mode, toggleMode };
};
