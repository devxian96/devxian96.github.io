import { type FC, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { Style } from '@/types';

const DURATION = { duration: 0.3 };

const SwitchButtonWrapper = styled(motion.div)<Style>`
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 25px;
    background-color: #ccc;
    cursor: pointer;
    margin-left: 8px;
    ${({ sx }) => sx}
`;

const Switch = styled(motion.button)`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    margin-right: 25px;
    border: none;
`;

const SwitchPattern = styled(motion.div)`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #f6f1d5;
    cursor: pointer;
    margin-right: 25px;
    border: none;
`;

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
                <SwitchPattern />
                {/* TODO: 달무늬 햇빛 질감 표현하기 */}
            </Switch>
        </SwitchButtonWrapper>
    );
};
