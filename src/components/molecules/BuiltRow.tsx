import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import type { Work } from '@/constants/works';

interface Props {
	work: Work;
}

/** "무엇을 / 왜" 두 칸으로 읽히는 행. 같은 규격 카드 여섯 장보다 이 편이 문장으로 읽힌다. */
export const BuiltRow = ({ work }: Props) => {
	return (
		<a
			href={work.href}
			target="_blank"
			rel="noreferrer"
			className="group grid items-baseline gap-2 border-t py-6 transition-colors hover:bg-card md:grid-cols-[16rem_1fr_auto] md:gap-8 md:px-4"
		>
			<span className="flex items-center gap-3">
				{work.logo ? (
					<Image
						src={work.logo}
						alt=""
						width={28}
						height={28}
						className="size-7 shrink-0 rounded-sm bg-white object-contain"
					/>
				) : null}
				<span className="font-mono text-base font-bold transition-colors group-hover:text-primary">
					{work.name}
				</span>
			</span>

			<span className="text-sm/relaxed text-muted-foreground">{work.reason}</span>

			<span className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
				{work.stack}
				<ArrowUpRight className="size-3.5 transition-colors group-hover:text-primary" />
			</span>
		</a>
	);
};
