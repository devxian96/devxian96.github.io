'use client';

import { useEffect, useRef } from 'react';

const clamp01 = (value: number) => Math.min(1, Math.max(0, value));

/** 엔진이 막(act) 요소에 인라인으로 쓰는 진행도 --sc-p. 아직 안 썼으면 0. */
const actProgress = (act: Element | null) =>
	act instanceof HTMLElement ? parseFloat(act.style.getPropertyValue('--sc-p')) || 0 : 0;

/** 결말 막에서 divider가 왼쪽 끝으로 밀려나는 구간. CSS의 --collapse와 같은 식이어야 선과 clip이 맞는다. */
const COLLAPSE_FROM = 0.12;
const COLLAPSE_LEN = 0.28;

/**
 * 분할 무대의 chrome(가운데 선, 두 지면 라벨, 正 획 tally, 진행 채움)을 스크롤에서 구동한다.
 *
 * 엔진은 [data-sc-*]만 다룬다. 선이 밀려나는 것과 획이 그어지는 것은 이 페이지만의 것이라
 * 엔진을 건드리지 않고 여기서 --sc-p를 읽어 DOM에 직접 쓴다.
 *
 * 부수 효과 하나 더: 고정(pin)된 막 안의 링크에 키보드 포커스가 오면, 그 링크의 cue가
 * 열리는 진행도로 스크롤을 세운다. 안 그러면 보이지 않는 링크에 포커스가 앉는다.
 */
export const useSplitChrome = () => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const chrome = ref.current;

		if (!chrome) {
			return undefined;
		}

		const root = chrome.closest('.home');
		const closeAct = document.querySelector('[data-home-act="close"]');
		const strokes = Array.from(chrome.querySelectorAll<SVGPathElement>('[data-stroke]'));
		const total = chrome.querySelector<HTMLElement>('[data-tally-total]');
		const fill = chrome.querySelector<HTMLElement>('[data-tally-fill]');
		const items = Array.from(document.querySelectorAll<HTMLElement>('[data-tally-at]'));
		const avatar = document.querySelector<HTMLElement>('.home-hero__avatar');
		let frame = 0;
		let last = '';

		const paint = () => {
			frame = requestAnimationFrame(paint);

			const collapse = clamp01((actProgress(closeAct) - COLLAPSE_FROM) / COLLAPSE_LEN);
			const track = document.documentElement.scrollHeight - innerHeight;
			const progress = track > 0 ? clamp01(scrollY / track) : 0;

			const count = items.filter((item) => {
				const at = parseFloat(item.dataset.tallyAt ?? '1');

				return actProgress(item.closest('[data-sc-act]')) >= at;
			}).length;

			// 선이 사진을 가로지르지 않게, 사진이 화면에 있는 동안 그 자리만 선을 비운다.
			const box = avatar?.getBoundingClientRect();
			const gap =
				box && box.bottom > 0 && box.top < innerHeight && box.right > 0 && box.left < innerWidth
					? [box.top - 6, box.bottom + 6, box.left - 6, box.right + 6].map(Math.round)
					: [0, 0, 0, 0];

			const state = `${collapse.toFixed(3)}|${progress.toFixed(3)}|${count}|${gap.join()}`;

			if (state === last) {
				return;
			}

			last = state;
			(root instanceof HTMLElement ? root : document.documentElement).style.setProperty(
				'--collapse-page',
				collapse.toFixed(3),
			);
			fill?.style.setProperty('--prog', progress.toFixed(3));
			chrome.style.setProperty('--gap-top', `${gap[0]}px`);
			chrome.style.setProperty('--gap-bottom', `${gap[1]}px`);
			chrome.style.setProperty('--gap-left', `${gap[2]}px`);
			chrome.style.setProperty('--gap-right', `${gap[3]}px`);
			strokes.forEach((stroke, index) => {
				stroke.classList.toggle('is-drawn', index < count);
			});
			// 전부 세었고 붕괴가 끝났을 때만 획이 액센트로 켜진다. 총합의 순간.
			chrome.classList.toggle('is-done', count === items.length && collapse >= 1);

			if (total) {
				total.textContent = `지나온 만든 것 ${count}`;
			}

			chrome.setAttribute('aria-label', `지나온 만든 것 ${count}`);
			// 하네스가 읽는 렌더 상태. 선 위치와 획 수만 적는다. 원시 스크롤값은 적지 않는다.
			chrome.setAttribute('data-sc-verify-state', `split:${Math.round(collapse * 100)} tally:${count}`);
		};

		const parkFocus = (event: FocusEvent) => {
			const target = event.target;

			if (!(target instanceof Element)) {
				return;
			}

			const cue = target.closest<HTMLElement>('[data-sc-cue]');
			const act = target.closest<HTMLElement>('[data-sc-act]');

			if (!cue || !act) {
				return;
			}

			const rect = target.getBoundingClientRect();
			const onScreen = rect.top >= 0 && rect.bottom <= innerHeight;

			if (onScreen && parseFloat(getComputedStyle(cue).opacity) > 0.85) {
				return;
			}

			const [from = 0, to] = (cue.dataset.scCue ?? '').trim().split(/\s+/).map(parseFloat);
			// 한 값짜리 cue는 램프가 창(from~1)의 30%다. 그 램프를 지나야 열린다.
			const at = Number.isFinite(to) ? (from + to) / 2 : from + (1 - from) * 0.6;
			const travel = Math.max(act.offsetHeight - innerHeight, 1);

			// 엔진도 focusin에서 scrollIntoView를 부르고, 나중에 등록된 쪽이 이긴다.
			// 한 프레임 뒤에 세워야 엔진이 보낸 자리가 아니라 cue가 열리는 자리에 선다.
			requestAnimationFrame(() => {
				scrollTo({ top: act.offsetTop + travel * at, behavior: 'instant' });
			});
		};

		// 스크롤 이벤트에 붙이면 엔진의 rAF보다 먼저 돌아 한 프레임 전 --sc-p를 읽고,
		// 멈춘 자리에서 그 어긋남이 그대로 남는다. 매 프레임 읽되 값이 같으면 아무것도 쓰지 않는다.
		frame = requestAnimationFrame(paint);
		document.addEventListener('focusin', parkFocus);

		return () => {
			cancelAnimationFrame(frame);
			document.removeEventListener('focusin', parkFocus);
		};
	}, []);

	return ref;
};
