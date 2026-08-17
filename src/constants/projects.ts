export interface Project {
	name: string;
	org: string;
	period: string;
	summary: string;
	highlights: string[];
	stack: string;
	href?: string;
	/** 실제 서비스 화면. 있는 것만 full-bleed 밴드로 크게 보여준다. */
	image?: string;
	imageAlt?: string;
}

/** 이력서에서 뽑은 대표 프로젝트. 최신 순. */
export const PROJECTS: Project[] = [
	{
		name: 'AI 홈페이지 빌더',
		org: 'Cafe24',
		period: '2026.03 — 진행중',
		summary:
			'AI 채팅만으로 홈페이지를 만드는 완전 관리형 빌더. 기획·디자인·프론트·백엔드가 다 함께 AI를 쓰는 협업 프로세스를 세우고 3개월 만에 냈습니다.',
		highlights: [
			'프로젝트 전체 91%를 바이브코딩으로 개발',
			'커스텀 ESLint 룰 · Claude Skills · husky로 스파게티 코드 차단',
			'아토믹 디자인 + DDD 컴포넌트 설계, 온보딩 퍼널 설계',
			'어드민 대시보드 · 예약 · 설정 · 부가서비스 전반',
		],
		stack: 'Next.js · React · TypeScript · TanStack Query · shadcn · Tailwind · Zustand · Orval',
		href: 'https://homebuilder.cafe24.com/',
		image: '/images/works/homebuilder.jpg',
		imageAlt:
			'카페24 AI 홈페이지 빌더 랜딩 화면. 업종을 고르면 AI가 만든 홈페이지 예시가 노트북 목업 안에 떠 있다.',
	},
	{
		name: 'BUZZLE',
		org: 'coFound · 프리랜서',
		period: '2022.02 — 진행중',
		summary:
			'드래그 앤 드롭으로 홈페이지를 만드는 노코드 서비스. Wix·아임웹과 달리 결과물이 실제 React 웹페이지로 나오도록 만들었습니다. 3인팀을 이끌고 주말마다 짓고 있습니다.',
		highlights: [
			'조립한 화면을 VirtualDomTree로 객체화해 React 페이지로 출력',
			'편집 히스토리 되돌리기 · 컴포넌트 제어 툴바',
			'머티리얼 · 레트로 · 뉴모피즘 · 글래스모피즘 디자인 시스템',
			'ModuleCSS → BDS → shadcn·Tailwind로 완전 전환',
			'tauri로 모바일 · 데스크탑 앱까지 커버',
		],
		stack: 'React · Zustand · Vite · Hono · Prisma · MongoDB · tauri 2.0',
		href: 'https://buzzle.tools',
		image: '/images/works/buzzle.jpg',
		imageAlt: '버즐 랜딩 화면. 격자 배경 위에 "코드는 버즐이, 상상은 내가" 문구가 놓여 있다.',
	},
	{
		name: '에디봇',
		org: 'Cafe24',
		period: '2021.10 — 2024.06',
		summary:
			'포토샵 없이 클릭과 드래그만으로 상품 상세페이지를 만드는 WYSIWYG 에디터. 프론트엔드 편집기부터 이를 API로 대신 수행하는 백엔드 렌더 서버까지 만들었습니다.',
		highlights: [
			'버추얼돔을 포함한 SPA 라이브러리 직접 개발, 편집영역 미니맵에 적용',
			'UI 기반 사용자 활동 추적 에러 트래커 (Sentry.io 유사)',
			'HTML · Blob · SVG · Canvas 결합 블러 필터',
			'Playwright 기반 렌더 서버 — Redis 락, Backoff, 좀비 프로세스 최적화',
			'Google Translate API 캐싱으로 비용 약 20% 절감',
		],
		stack: 'VanillaJS · Canvas · SVG · PHP → FastAPI · Playwright · Redis · Docker',
		href: 'https://edibot.cafe24.com',
		image: '/images/works/edibot.jpg',
		imageAlt: '카페24 에디봇 화면. 상단 배너 아래로 상품 상세페이지 디자인 템플릿이 격자로 늘어서 있다.',
	},
	{
		name: 'EC 물류진단 대시보드',
		org: 'Cafe24',
		period: '2025.09 — 2025.12',
		summary:
			'카페24 프로 매일배송 서비스의 사용 전후 데이터를 차트로 보여주고 미래 예측값까지 함께 제공하는 대시보드. 2.3일 만에 개발해 배포했습니다.',
		highlights: ['Recharts로 14종 커스텀 그래프 개발', '드래그 가능한 비교 슬라이더', 'Codex로 JSX 생성'],
		stack: 'Next.js · React · TypeScript · shadcn · Tailwind · React Query · Recharts',
	},
	{
		name: '헤이버디',
		org: '프리랜서',
		period: '2019.12 — 2020.07',
		summary:
			'나와 맞는 골프 장비를 찾아주는 서비스. 프로선수 데이터와 골프채 스펙을 사용자 정보와 비교해 추천합니다.',
		highlights: [
			'Euclidean distance 알고리즘으로 선수 데이터 비교 분석',
			'SEO를 위해 CSR → SSR 마이그레이션',
			'Route 기반 Sitemap 자동 생성',
			'뉴모피즘 디자인 프레임워크를 만들어 오픈소스로 배포',
		],
		stack: 'Nuxt.js · Express · Sequelize · AWS EC2 · RDS · Route53',
		image: '/images/works/heybirdie.webp',
		imageAlt: '헤이버디 웹사이트 화면. 골프 장비 분석 리포트와 선수 비교 카드가 놓여 있다.',
	},
	{
		name: '라이센스 관리 시스템',
		org: '하이퍼 팀 프로젝트 · 프리랜서',
		period: '2020.08 — 2021.02',
		summary:
			'소프트웨어 크랙 문제에 대응하는 온라인 인증 서비스. 미국·일본·한국 개발자가 디스코드로 라이브 코딩하며 함께 만들었습니다.',
		highlights: [
			'C++ 암호화 모듈 연동, Electron 빌더 개발',
			'동접자 계산 알고리즘, BitFlag 2중 권한 확인',
			'한국어 · 일본어 · 중국어 제공',
			'PHP REST 프레임워크와 ORM을 직접 만들어 오픈소스화',
		],
		// phpExpress 로고가 있지만 여기 카드 이미지는 화면 스크린샷 자리다.
		// 로고를 넣으면 object-cover가 잘라내 알아볼 수 없다. 로고는 Works 카드에서 쓴다.
		stack: 'Nuxt.js · Electron · C# · PHP · JWT · i18next',
	},
];
