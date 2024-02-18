import type { FC, PropsWithChildren } from 'react';
import { Container } from '@mui/system';

export const Main: FC<PropsWithChildren> = ({ children }) => {
    return <Container component="main">{children}</Container>;
};
