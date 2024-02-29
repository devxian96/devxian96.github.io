import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { Style } from '@/types';

export const SwitchButtonWrapper = styled(motion.div)<Style>`
    position: relative;
    width: 50px;
    height: 25px;
    border-radius: 25px;
    background-color: #ccc;
    cursor: pointer;
    margin-left: 8px;
    ${({ sx }) => sx}
`;

export const Switch = styled(motion.button)`
    position: absolute;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    margin-right: 25px;
    border: none;
`;

export const Cloud = styled(motion.div)`
    position: absolute;
    opacity: 0;
    left: -20px;
    width: 10px;
    height: 10px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow:
        2.5px 2.5px 0 0 #fff,
        10px 2.5px 0 0 #fff,
        7px -1px 0 0 #fff;
    ::after {
        content: '';
        position: absolute;
        width: 6px;
        height: 7px;
        background-color: #fff;
        border-radius: 50%;
        top: 2.5px;
        left: -3px;
    }
`;

export const Star = styled(motion.div)`
    position: absolute;
    opacity: 0;
    width: 2px; /* 별의 가로 크기 */
    height: 2px; /* 별의 세로 크기 */
    background-color: transparent;
    border-radius: 50%;
    box-shadow:
        0 0 1px white,
        /* 중앙 별 */ 0 -1px 3px yellow,
        /* 위쪽 별 */ 1px -0.5px 3px gold,
        /* 오른쪽 위 별 */ 2px 2px 3px yellow,
        /* 오른쪽 아래 별 */ 0 2px 3px gold,
        /* 아래쪽 별 */ -2px 1px 3px yellow,
        /* 왼쪽 아래 별 */ -2px -1px 3px white; /* 왼쪽 위 별 */
`;
