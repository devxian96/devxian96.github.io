import type { FC } from 'react';
import Link from 'next/link';
import { Container, Stack } from '@mui/system';
import { Text } from '@/components/atoms';
import { BENTO_STYLE, COLOR } from '@/constants';

const style = {
    footer: {
        ...BENTO_STYLE,
        backgroundColor: COLOR.secondary100,
        backdropFilter: 'blur(10px)',
        top: 10,
        zIndex: 2,
        mt: 3,
        mb: 10,
    },
    footerWrapper: {
        lineHeight: '50px',
        whiteSpace: 'wrap',
    },
};

export const Footer: FC = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <Container component="footer" sx={style.footer}>
            <Stack
                direction={['column', 'row', 'row', 'row']}
                justifyContent="center"
                alignItems="center"
                gap={1}
                sx={style.footerWrapper}
            >
                <Link href="https://github.com/devxian96/devxian96.github.io/blob/develop/CHANGELOG.md">
                    MIT License
                </Link>
                <Text>Seokhyun Jang © {year}</Text>
                <Link href="https://github.com/devxian96/devxian96.github.io/blob/develop/CHANGELOG.md">ChangeLog</Link>
                <Link href="https://github.com/devxian96/devxian96.github.io">Github</Link>
            </Stack>
        </Container>
    );
};
