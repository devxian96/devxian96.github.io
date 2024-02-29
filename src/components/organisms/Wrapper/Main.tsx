import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/material';

export const Main: FC<PropsWithChildren> = ({ children }) => {
    return <Container component="main">{children}</Container>;
};
