import type { FC } from 'react';
import { List, SwitchButton, Box } from '@/components/atoms';

export const Nav: FC = () => {
    return (
        <Box component="nav">
            <List>
                <List.Item href="/">Home</List.Item>
                <List.Item href="/about">About</List.Item>
                <List.Item href="/posts">Posts</List.Item>
            </List>
            <SwitchButton />
        </Box>
    );
};
