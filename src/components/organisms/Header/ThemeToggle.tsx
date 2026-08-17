'use client';

import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/atoms/button';
import { useTheme } from '@/hooks/useTheme';

export const ThemeToggle = () => {
	const { mode, toggleMode } = useTheme();

	return (
		<Button
			variant="ghost"
			size="icon"
			className="text-white group-data-[solid=true]/header:text-foreground"
			onClick={toggleMode}
			aria-label={mode === 'dark' ? '라이트 모드로 전환' : '다크 모드로 전환'}
		>
			{/* 아이콘 전환은 html.dark 클래스가 CSS로 처리한다. 상태로 고르면
			    rehydrate 전후로 아이콘이 한 번 튀기 때문이다. */}
			<Sun className="hidden dark:block" />
			<Moon className="block dark:hidden" />
		</Button>
	);
};
