import type { FC } from 'react';
import { Menu, MenuList, SwitchButton, Box } from '@/components/atoms';

export const Nav: FC = () => {
    return (
        <Box component="nav" disabledBento>
            <Menu>
                <MenuList href="/">Home</MenuList>
                <MenuList href="/about">About</MenuList>
                <MenuList href="/posts">Posts</MenuList>
            </Menu>
            <SwitchButton />
        </Box>
    );
};
