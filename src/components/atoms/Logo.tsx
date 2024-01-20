import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@/components/atoms';
import { COLOR } from '@/constants';

const style = {
    logo: {
        color: COLOR.white100,
        fontWeight: 'bold',
        lineHeight: '50px',
    },
    img: {
        verticalAlign: 'middle',
        marginRight: '5px',
    },
};

export const Logo: FC = () => {
    return (
        <Link href="/">
            <Text sx={style.logo} size="Large">
                <Image src="/icon.png" alt="로고" width={25} height={25} style={style.img} />
                SeokHyun Jang
            </Text>
        </Link>
    );
};
