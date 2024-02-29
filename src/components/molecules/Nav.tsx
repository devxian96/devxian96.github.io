import type { FC } from 'react';
import { Menu, SwitchButton, Box } from '@/components/atoms';

export const Nav: FC = () => {
    return (
        <Box component="nav">
            <Menu>
                <Menu.List href="/">Home</Menu.List>
                <Menu.List href="/about">About</Menu.List>
                <Menu.List href="/posts">Posts</Menu.List>
            </Menu>
            <SwitchButton />
        </Box>
    );
};
