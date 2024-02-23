import type { FC } from 'react';
import type { Style } from '@/types';
import { useThemeState } from '@/stores';
import { SwitchButtonWrapper, Switch, Cloud, Star } from './Style';

const DURATION = { duration: 0.3 };
const DURATION_LATE = { duration: 0.2 };

export const SwitchButton: FC<Style> = ({ sx }) => {
    const [mode, setMode] = useThemeState();

    const handleClick = () => {
        setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
        <SwitchButtonWrapper
            sx={sx}
            onClick={handleClick}
            animate={{
                backgroundColor: mode === 'dark' ? '#2e4482' : '#87CEEB',
            }}
            transition={DURATION}
        >
            <Switch
                animate={{
                    left: mode === 'dark' ? 0 : 25,
                    backgroundColor: mode === 'dark' ? '#F6F1D5' : '#FFE484',
                }}
                transition={DURATION}
            >
                <Cloud
                    animate={{
                        opacity: mode === 'dark' ? 0 : 1,
                        top: mode === 'dark' ? 0 : 10,
                        left: mode === 'dark' ? 0 : -12,
                    }}
                    transition={DURATION_LATE}
                />

                <Star
                    animate={{
                        opacity: mode === 'dark' ? 1 : 0,
                        top: mode === 'dark' ? 15 : 0,
                        left: mode === 'dark' ? 33 : 0,
                    }}
                    transition={DURATION_LATE}
                />
                <Star
                    animate={{
                        opacity: mode === 'dark' ? 1 : 0,
                        top: mode === 'dark' ? 5 : 0,
                        left: mode === 'dark' ? 40 : 0,
                    }}
                    transition={DURATION_LATE}
                />
            </Switch>
        </SwitchButtonWrapper>
    );
};
