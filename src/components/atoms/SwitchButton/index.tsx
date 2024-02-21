import { type FC, useState } from 'react';
import type { Style } from '@/types';
import { SwitchButtonWrapper, Switch, Cloud, Star } from './Style';

const DURATION = { duration: 0.3 };
const DURATION_LATE = { duration: 0.2 };

export const SwitchButton: FC<Style> = ({ sx }) => {
    const [darkmode, setDarkmode] = useState(true);

    const handleClick = () => {
        setDarkmode(!darkmode);
    };

    return (
        <SwitchButtonWrapper
            sx={sx}
            onClick={handleClick}
            animate={{
                backgroundColor: darkmode ? '#2e4482' : '#87CEEB',
            }}
            transition={DURATION}
        >
            <Switch
                animate={{
                    left: darkmode ? 0 : 25,
                    backgroundColor: darkmode ? '#F6F1D5' : '#FFE484',
                }}
                transition={DURATION}
            >
                <Cloud
                    animate={{
                        opacity: darkmode ? 0 : 1,
                        top: darkmode ? 0 : 10,
                        left: darkmode ? 0 : -12,
                    }}
                    transition={DURATION_LATE}
                />

                <Star
                    animate={{
                        opacity: darkmode ? 1 : 0,
                        top: darkmode ? 15 : 0,
                        left: darkmode ? 33 : 0,
                    }}
                    transition={DURATION_LATE}
                />
                <Star
                    animate={{
                        opacity: darkmode ? 1 : 0,
                        top: darkmode ? 5 : 0,
                        left: darkmode ? 40 : 0,
                    }}
                    transition={DURATION_LATE}
                />
            </Switch>
        </SwitchButtonWrapper>
    );
};
