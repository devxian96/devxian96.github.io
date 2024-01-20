import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@/components/atoms';

const style = {
    logo: {
        color: '#fff',
        fontWeight: 'bold',
        lineHeight: '50px',
    },
    img: {
        verticalAlign: 'middle',
        marginRight: '5px',
    },
} as const;

export const Logo: FC = () => {
    return (
        <Link href="/">
            <Text sx={style.logo} size="large">
                <Image src="/icon.png" alt="로고" width={25} height={25} style={style.img} />
                SeokHyun Jang
            </Text>
        </Link>
    );
};
