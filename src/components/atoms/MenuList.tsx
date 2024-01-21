import type { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Text } from '@/components/atoms';

interface Props extends PropsWithChildren {
    href: string;
}

export const MenuList: FC<Props> = ({ children, href }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
    const activeBackground = !isActive ? undefined : 'primary100';
    const activeColor = !isActive ? undefined : 'secondary100';

    return (
        <li>
            <Link href={href}>
                <Text size="medium" backgroundColor={activeBackground} color={activeColor} gutter="8px" rounded>
                    {children}
                </Text>
            </Link>
        </li>
    );
};
