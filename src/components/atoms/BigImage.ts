'use client';

import styled from '@emotion/styled';

export const BigImage = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 5;
    width: 300;
    max-width: 80vw;
    border-radius: 15px;
    box-shadow: 0 0 20px 0 rgba(0 0 0 50%);
    opacity: 0.9;
    transform: translate(-50%, -50%);
`;
