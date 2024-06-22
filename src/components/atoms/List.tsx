import type { FC, PropsWithChildren } from 'react';
import { List as MuiList, ListItem } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Style } from '@/types';
import { Text } from './Text';

interface Props extends FC<ListProps> {
    Item: FC<ItemProps>;
}

interface ListProps extends PropsWithChildren, Style {}

/**
 * List component
 * @example
 * <List>
 *  <List.Item>List item 1</List.Item>
 *  <List.Item>List item 2</List.Item>
 * </List>
 */
export const List: Props = ({ sx, children }) => {
    return (
        <MuiList
            component="li"
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

interface ItemProps extends PropsWithChildren {
    href: string;
}

const Item: FC<ItemProps> = ({ children, href }) => {
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
List.Item = Item;
