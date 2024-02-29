import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@/components/atoms';

/**
 * 로고 컴포넌트
 * @example
 * <Logo />
 */
export const Logo: FC = () => {
    const style = {
        logo: {
            color: 'palette.text',
            fontWeight: 'bold',
            lineHeight: '50px',
            paddingTop: 0,
            paddingBottom: 0,
        },
        img: {
            verticalAlign: 'middle',
            marginRight: '5px',
        },
    };

    return (
        <Link href="/">
            <Text sx={style.logo} size="Large">
                <Image src="/icon.png" alt="로고" width={25} height={25} style={style.img} />
                SeokHyun Jang
            </Text>
        </Link>
    );
};
