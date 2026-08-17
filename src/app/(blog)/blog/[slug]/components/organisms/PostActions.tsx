'use client';

import { Check, Copy, Share2 } from 'lucide-react';
import { usePostActions } from '@/hooks/usePostActions';

interface Props {
	title: string;
}

export const PostActions = ({ title }: Props) => {
	const { status, copyArticle, sharePost } = usePostActions(title);

	return (
		<div className="flex flex-wrap items-center gap-2">
			<button
				type="button"
				onClick={copyArticle}
				className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors hover:border-foreground"
			>
				{status === 'copied' ? <Check className="size-4" /> : <Copy className="size-4" />}
				{status === 'copied' ? '복사했습니다' : '글 복사'}
			</button>

			<button
				type="button"
				onClick={sharePost}
				className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition-colors hover:border-foreground"
			>
				{status === 'linkCopied' ? <Check className="size-4" /> : <Share2 className="size-4" />}
				{status === 'linkCopied' ? '주소를 복사했습니다' : '공유'}
			</button>

			{/* 스크린리더에도 결과가 전달되어야 한다. 버튼 라벨 변화만으로는 읽히지 않는다. */}
			<span role="status" aria-live="polite" className="sr-only">
				{status === 'copied' ? '글을 클립보드에 복사했습니다' : null}
				{status === 'linkCopied' ? '주소를 클립보드에 복사했습니다' : null}
				{status === 'failed' ? '복사하지 못했습니다' : null}
			</span>
		</div>
	);
};
