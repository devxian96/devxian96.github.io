import type { FC } from 'react';
import { Menu, MenuList } from '@/components/atoms';

export const Nav: FC = () => {
    return (
        <nav>
            <Menu>
                <MenuList href="/">Home</MenuList>
                <MenuList href="/about">About</MenuList>
                <MenuList href="/posts">Posts</MenuList>
            </Menu>
        </nav>
    );
};
