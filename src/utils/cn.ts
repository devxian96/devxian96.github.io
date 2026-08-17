import { clsx } from 'clsx';
import type { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Tailwind 클래스 병합 — 뒤에 오는 클래스가 앞의 같은 계열 클래스를 이긴다. */
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
