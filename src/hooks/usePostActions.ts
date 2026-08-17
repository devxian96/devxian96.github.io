'use client';

import { useCallback, useState } from 'react';

type ActionStatus = 'idle' | 'copied' | 'linkCopied' | 'failed';

/**
 * 글 본문 복사와 공유.
 *
 * 본문은 렌더된 DOM에서 읽는다 — 마크다운 원문을 클라이언트로 한 벌 더 내려보내면
 * 같은 글이 번들에 두 번 실린다. 화면에 이미 있는 것을 그대로 가져오는 편이 싸다.
 *
 * 공유는 Web Share API가 있으면 그쪽에, 없으면 주소 복사로 떨어진다. 데스크탑 브라우저
 * 상당수가 이 API를 지원하지 않으므로 폴백이 본 경로에 가깝다.
 */
export const usePostActions = (title: string) => {
	const [status, setStatus] = useState<ActionStatus>('idle');

	const flash = useCallback((next: ActionStatus) => {
		setStatus(next);
		window.setTimeout(() => setStatus('idle'), 2000);
	}, []);

	const copyArticle = useCallback(async () => {
		const body = document.querySelector('[data-post-body]');

		try {
			await navigator.clipboard.writeText(`${title}\n\n${body?.textContent?.trim() ?? ''}`);
			flash('copied');
		} catch {
			flash('failed');
		}
	}, [title, flash]);

	const sharePost = useCallback(async () => {
		const url = window.location.href;

		if (navigator.share) {
			try {
				await navigator.share({ title, url });

				return;
			} catch {
				// 사용자가 공유 시트를 닫은 경우도 여기로 온다. 주소 복사로 넘긴다.
			}
		}

		try {
			await navigator.clipboard.writeText(url);
			flash('linkCopied');
		} catch {
			flash('failed');
		}
	}, [title, flash]);

	return { status, copyArticle, sharePost };
};
