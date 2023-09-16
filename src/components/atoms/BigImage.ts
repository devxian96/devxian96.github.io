'use client';

import styled from '@emotion/styled';

export const BigImage = styled.img`
	position: absolute;
	z-index: 5;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	maxwidth: 80vw;
	border-radius: 15px;
	box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5);
	opacity: 0.9;
	height: 80vh;
`;
