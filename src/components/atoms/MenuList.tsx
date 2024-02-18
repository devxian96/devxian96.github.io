import type { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';
import type { Style } from '@/types';
import { Text } from './Text';

const StyledMenuList = styled.li<Style>`
    ${({ sx }) => sx}
`;
interface Props extends PropsWithChildren, Style {
    href: string;
}

/**
 * MenuList Component
 * @example
 * <Menu>
 *  <MenuList href="/">Home</MenuList>
 *  <MenuList href="/about">About</MenuList>
 *  <MenuList href="/posts">Posts</MenuList>
 * </Menu>
 */
export const MenuList: FC<Props> = ({ children, href, sx }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeBackground = !isActive ? undefined : 'primary100';
    const activeColor = !isActive ? undefined : 'secondary100';

    return (
        <StyledMenuList sx={sx}>
            <Link href={href}>
                <Text size="medium" backgroundColor={activeBackground} color={activeColor} gutter="8px" rounded>
                    {children}
                </Text>
            </Link>
        </StyledMenuList>
    );
};
