import { PROJECTS } from '@/constants/projects';
import type { Project } from '@/constants/projects';

/**
 * 홈 "없으면 | 만든다" 분할 페이지 전용 데이터.
 *
 * 왼쪽(없으면) 지면에는 "무엇이 없었는지", 오른쪽(만든다) 지면에는 "그래서 만든 것"이 놓인다.
 * 도구 여섯 개는 constants/works.ts를 그대로 쓰고, 여기서는 큰 화면 세 개와 걸린 시간만 정한다.
 * 숫자는 전부 이력서(constants/projects.ts, stats.ts)에서 온 것이다. 세지 않은 숫자는 없다.
 */

export interface HomeScreen {
	/** 왼쪽 지면. 없어서. */
	missing: string;
	project: Project;
	/** projects.ts의 기간에는 em dash가 있다. 화면에 보이는 em dash는 금지라 물결로 바꿔 둔다. */
	period: string;
	/** 지금 만들고 있는 것 하나만 true. 액센트가 붙는 자리다. */
	now?: boolean;
}

const screen = (name: string, missing: string, now = false): HomeScreen => {
	const project = PROJECTS.find((entry) => entry.name === name);

	if (!project) {
		throw new Error(`홈 화면 데이터에 없는 프로젝트: ${name}`);
	}

	return { missing, project, period: project.period.replace(' — ', ' ~ '), now };
};

export const HOME_SCREENS: HomeScreen[] = [
	screen('에디봇', '포토샵 없이 상품 상세페이지를 만들 방법이 없어서'),
	screen('BUZZLE', '코드 없이 조립한 화면이 진짜 React 페이지로 나오는 빌더가 없어서'),
	screen('AI 홈페이지 빌더', '코드를 못 쓰는 사람이 자기 홈페이지를 가질 방법이 없어서', true),
];

export interface HomeTiming {
	/** 왼쪽 지면. 무엇이었는지. */
	what: string;
	/** 카운터 목표값. 렌더될 모양 그대로 적는다. */
	value: string;
	unit: string;
}

export const HOME_TIMINGS: HomeTiming[] = [
	{ what: '매일배송 물류진단 대시보드, 커스텀 차트 14종', value: '2.3', unit: '일' },
	{ what: '유튜브 샵스 어필리에이트, 기한이 조건이던 프로젝트', value: '5', unit: '일' },
	{ what: 'AI 홈페이지 빌더, 기획부터 출시까지', value: '3', unit: '개월' },
	{ what: '그중 바이브코딩으로 쓴 코드', value: '91', unit: '%' },
];

/** 페이지 로컬 링크 모음. 히어로 오른쪽 상단과 클로징에 같은 순서로 놓인다. */
export const HOME_DOC_LINKS = [
	{ label: '변경 이력', href: '/changelog' },
	{ label: '라이선스', href: '/license' },
] as const;

/**
 * 장부 세로줄의 正자 획. 5획이 한 자다. 순서는 필순: 一, 丨, 가운데 짧은 一, 왼쪽 짧은 丨, 아래 一.
 * viewBox 20×24 기준 path.
 */
export const TALLY_STROKES = ['M3 4H17', 'M10 4V20', 'M10 12H16', 'M5 12V20', 'M3 20H17'] as const;

/** 홈에서 지나가는 "만든 것"은 도구 6 + 화면 3 = 9개. 正 두 자(10획)면 다 담긴다. */
export const TALLY_GLYPHS = [0, 1] as const;
