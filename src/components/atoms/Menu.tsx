import type { FC, PropsWithChildren } from 'react';
import { List as MuiList, ListItem } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Style } from '@/types';
import { Text } from './Text';

interface Props extends FC<MenuProps> {
    List: FC<ListProps>;
}

interface MenuProps extends PropsWithChildren, Style {}

/**
 * Menu component
 * @example
 * <Menu>
 *  <MenuList>Menu item 1</MenuList>
 *  <MenuList>Menu item 2</MenuList>
 * </Menu>
 */
export const Menu: Props = ({ sx, children }) => {
    return (
        <MuiList
            component="menu"
            disablePadding
            dense
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '0.5rem',
                listStyle: 'none',
                ...sx,
            }}
        >
            {children}
        </MuiList>
    );
};

interface ListProps extends PropsWithChildren {
    href: string;
}

const List: FC<ListProps> = ({ children, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeBackground = !isActive ? undefined : 'primary';
    const activeColor = !isActive ? undefined : 'secondary';

    return (
        <ListItem dense disablePadding>
            <Link href={href}>
                <Text size="medium" backgroundColor={activeBackground} color={activeColor} gutter="8px" rounded>
                    {children}
                </Text>
            </Link>
        </ListItem>
    );
};
Menu.List = List;
