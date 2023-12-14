'use client';

import styled from '@emotion/styled';

export const BigImage = styled.img`
	position: absolute;
	z-index: 5;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300;
	max-width: 80vw;
	opacity: 0.9;
	border-radius: 15px;
	box-shadow: 0 0 20px 0 rgba(0 0 0 50%);
`;
