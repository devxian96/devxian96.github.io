'use client';

import { TALLY_GLYPHS, TALLY_STROKES } from '@/constants/home';
import { useSplitChrome } from '@/hooks/useSplitChrome';

/**
 * 분할 무대의 chrome. 문법상 고정 바는 없고 가운데 선이 chrome이다.
 *
 * 선 위에 두 지면의 라벨, 진행 채움, 그리고 正자 tally가 산다. 만든 것을 하나 지날 때마다
 * 획이 하나 그어지고, 결말에서 선이 왼쪽 끝으로 밀려날 때 획도 같이 간다.
 * 위치 계산은 CSS(--collapse-page)가, 값은 useSplitChrome이 쓴다.
 */
export const SplitDivider = () => {
	const ref = useSplitChrome();

	return (
		<div ref={ref} className="home-divider" role="status" aria-label="지나온 만든 것 0">
			<span className="home-divider__line" aria-hidden>
				<i className="home-divider__fill" data-tally-fill />
			</span>

			<span className="home-divider__label home-divider__label--paper" aria-hidden>
				없으면
			</span>

			<div className="home-divider__side">
				<span className="home-divider__label" aria-hidden>
					만든다
				</span>
				<span className="home-divider__tally" aria-hidden>
					{TALLY_GLYPHS.map((glyph) => (
						<svg key={glyph} viewBox="0 0 20 24" width="18" height="22" className="home-tally">
							{TALLY_STROKES.map((stroke, index) => (
								<path key={stroke} d={stroke} data-stroke={glyph * TALLY_STROKES.length + index} />
							))}
						</svg>
					))}
				</span>
				<span className="home-divider__total" data-tally-total aria-hidden>
					지나온 만든 것 0
				</span>
			</div>
		</div>
	);
};
