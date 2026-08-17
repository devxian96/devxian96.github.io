export interface TimelineEntry {
	period: string;
	title: string;
	description: string;
}

/** 지금 하는 일에서 거슬러 올라가는 순서. */
export const TIMELINE: TimelineEntry[] = [
	{
		period: '2021.10 —',
		title: 'Cafe24 · AI 홈페이지 빌더',
		description:
			'업종만 고르면 AI가 홈페이지 한 채를 통째로 지어주고, 대화로 문구·이미지·색·분위기를 고쳐 나가는 서비스를 만듭니다.',
	},
	{
		period: '2021.10 — 2025',
		title: 'Cafe24 · 에디봇',
		description:
			'쇼핑몰 상세페이지 에디터. Canvas·SVG·Blob을 겹친 이미지 필터, Sentry 비슷한 클라이언트 에러 트래커를 직접 붙였습니다.',
	},
	{
		period: '2021.03 — 2021.06',
		title: '소프트젠 · 연구원',
		description: 'AI 관제 시스템 개발. React·Redux·Flask에 LSTM 기반 이상 탐지를 얹었습니다.',
	},
	{
		period: '2021.02 — 2021.06',
		title: '아주대학교 멘토',
		description: '뉴모피즘 디자인 프레임워크 개발 지도와 컨트리뷰트.',
	},
	{
		period: '2019.12 — 2020.08',
		title: '헤이버디 · 팀원',
		description: '나와 맞는 골프를 찾아주는 스타트업. 필요한 기술 스택은 전부 공부해서 붙였습니다.',
	},
	{
		period: '2019 —',
		title: '한림대학교 빅데이터학과',
		description: '여주대학교 컴퓨터정보과를 마치고 편입.',
	},
];
