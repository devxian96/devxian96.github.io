import { type FC, useMemo } from 'react';
import type { Style } from '@/types';
import { useThemeState } from '@/stores';
import { SwitchButtonWrapper, Switch, Cloud, Star } from './Style';

const DURATION = { duration: 0.3 };
const DURATION_LATE = { duration: 0.5 };

export const SwitchButton: FC<Style> = ({ sx }) => {
    const [mode, setMode] = useThemeState();

    const isDarkMode = useMemo(() => mode === 'dark', [mode]);

    const handleClick = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <SwitchButtonWrapper
            sx={sx}
            onClick={handleClick}
            animate={{
                backgroundColor: isDarkMode ? '#2e4482' : '#87CEEB',
            }}
            transition={DURATION}
        >
            <Switch
                animate={{
                    left: isDarkMode ? 0 : 25,
                    backgroundColor: isDarkMode ? '#F6F1D5' : '#FFE484',
                }}
                transition={DURATION}
            >
                <Cloud
                    animate={{
                        opacity: isDarkMode ? 0 : 1,
                        top: isDarkMode ? 0 : 10,
                        left: isDarkMode ? 0 : -12,
                    }}
                    transition={DURATION_LATE}
                />

                <Star
                    animate={{
                        opacity: isDarkMode ? 1 : 0,
                        top: isDarkMode ? 15 : 0,
                        left: isDarkMode ? 33 : 0,
                    }}
                    transition={DURATION_LATE}
                />
                <Star
                    animate={{
                        opacity: isDarkMode ? 1 : 0,
                        top: isDarkMode ? 5 : 0,
                        left: isDarkMode ? 40 : 0,
                    }}
                    transition={DURATION_LATE}
                />
            </Switch>
        </SwitchButtonWrapper>
    );
};
