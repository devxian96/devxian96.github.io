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

// TODO: 다크모드, 라이트모드 구현
// TODO: 언어 선택 구현
