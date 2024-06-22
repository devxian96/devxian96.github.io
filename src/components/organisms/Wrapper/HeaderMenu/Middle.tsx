import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { Text } from '@/components/atoms';
import { formatDate } from '@/utils';

export const Middle: FC = () => {
    const [date, setDate] = useState(formatDate(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(formatDate(new Date()));
        }, 60_000);
        return () => clearInterval(interval);
    }, []);

    return <Text>{date}</Text>;
};
