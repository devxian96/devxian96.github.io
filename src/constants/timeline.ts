export interface TimelineEntry {
	period: string;
	org: string;
	role: string;
	description: string;
}

/** 소속 기준 연혁. 프로젝트 단위 상세는 constants/projects.ts에 있다. */
export const TIMELINE: TimelineEntry[] = [
	{
		period: '2021.10 — 재직중',
		org: '카페24 주식회사',
		role: '정규직',
		description:
			'AI 홈페이지 빌더, 사내 AI 플랫폼, 애널리틱스, EC 어드민, 에디봇. 프론트엔드에서 시작해 렌더 서버와 AI 자동화 연구까지 넓혔습니다.',
	},
	{
		period: '2022.02 — 재직중',
		org: 'BUZZLE',
		role: 'coFound · 프리랜서',
		description: '노코드 웹빌더와 디자인 시스템 BDS. 3인팀을 이끌고 주말 프로젝트로 짓고 있습니다.',
	},
	{
		period: '2022.10 — 2024.02',
		org: 'IT 커뮤니티 코파운드',
		role: '프리랜서',
		description: 'IT 관계자를 위한 질의응답·채팅 커뮤니티. 6인팀을 이끌었습니다.',
	},
	{
		period: '2021.03 — 2021.07',
		org: '주식회사 소프트젠',
		role: '인턴',
		description:
			'센서 빅데이터를 LSTM으로 학습해 장애를 사전 탐지하는 AI 관제 시스템. 환경부 대기개선 통합관리 시스템 유지보수도 함께.',
	},
	{
		period: '2020.08 — 2021.02',
		org: '하이퍼 팀 프로젝트',
		role: '프리랜서',
		description: '라이센스 관리 시스템과 Electron 빌더. 3개국 개발자와 원격으로 협업했습니다.',
	},
	{
		period: '2019.12 — 2020.07',
		org: '헤이버디',
		role: '프리랜서',
		description: '골프 장비 추천 서비스 개발과 운영.',
	},
	{
		period: '2019.07 — 2019.08',
		org: '피타그래프',
		role: '인턴',
		description: '서울 상권분석 서비스 내 설문조사 시스템. 관련 논문에 참여했습니다.',
	},
];
