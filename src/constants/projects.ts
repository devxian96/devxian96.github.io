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

/**
 * 이력서에 적힌 프로젝트 전체. 최신 순.
 *
 * 화면이 남아 있는 것(`image`)은 밴드로 크게, 나머지는 행으로 촘촘하게 렌더한다.
 * 목록을 추리지 않는 이유 — 채용 담당자는 여백이 아니라 범위를 읽는다.
 */
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
			'그라파나 통계 화면 구축',
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
		period: '2021.10 — 2023.08',
		summary:
			'포토샵 없이 클릭과 드래그만으로 상품 상세페이지를 만드는 WYSIWYG 에디터. 레거시 코드와 팀 스타일에 적응하면서 편집기의 핵심 기능을 만들었습니다.',
		highlights: [
			'버추얼돔을 포함한 SPA 라이브러리 직접 개발, 편집영역 미니맵에 적용',
			'UI 기반 사용자 활동 추적 에러 트래커 (Sentry.io 유사)',
			'HTML · Blob · SVG · Canvas 결합 블러 필터',
			'중첩 SVG를 Canvas에 출력하도록 로직 변경, SVG to JSON 컨버터 개발',
			'크롬 private 메모리 · GPU 렌더러 메모리 최적화',
			'자체개발 번들러를 Vite로 교체',
		],
		stack: 'VanillaJS · Canvas · SVG · WYSIWYG · i18n · PHP · AWS',
		href: 'https://edibot.cafe24.com',
		image: '/images/works/edibot.jpg',
		imageAlt: '카페24 에디봇 화면. 상단 배너 아래로 상품 상세페이지 디자인 템플릿이 격자로 늘어서 있다.',
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
		name: 'Pado AI 사내 플랫폼',
		org: 'Cafe24',
		period: '2024.11 — 2026.06',
		summary:
			'팀별로 흩어져 있던 AI 활용을 한곳으로 모은 사내 플랫폼. 프롬프트를 자산으로 관리하고 검증하는 환경을 만들었습니다.',
		highlights: [
			'프롬프트 엔지니어링 전용 에디터 개발',
			'프롬프트 버전관리 시스템 설계',
			'Cisco SkillSpector 프롬프트 스캐너 추가',
			'meta agent rule of two 규칙 스캐너 개발',
		],
		stack: 'Next.js · React · TypeScript · ts-pattern · Zustand · Tailwind · shadcn(base ui) · Framer · Prisma · TanStack Query',
	},
	{
		name: 'EC 물류진단 대시보드',
		org: 'Cafe24',
		period: '2025.09 — 2025.12',
		summary:
			'카페24 프로 매일배송 서비스의 사용 전후 데이터를 차트로 보여주고 미래 예측값까지 함께 제공하는 대시보드. 2.3일 만에 개발해 배포했습니다.',
		highlights: ['Recharts로 14종 커스텀 그래프 개발', '드래그 가능한 비교 슬라이더', 'Codex를 사용한 JSX 생성'],
		stack: 'Next.js · React · TypeScript · shadcn · Tailwind · React Query · Recharts',
	},
	{
		name: 'AI Driven E2E Testing',
		org: 'Cafe24 · 연구',
		period: '2025.07',
		summary:
			'블랙박스 테스트만으로 웹 품질을 담보할 수 있을지 확인한 연구. 7가지 기능 테스트 전략을 정의하고 AI가 시나리오를 직접 생성·실행하는 시스템을 만들었습니다.',
		highlights: [
			'몽키 · 페르소나 · 목적 기반 · 탐색적 · 회귀 리스크 · 상태 전이 · 경로 조합 7종 전략 정의',
			'Ollama와 Gemma3 로컬 세팅',
			'결과 페이지 제너레이터 구현',
		],
		stack: 'TypeScript · Playwright · Ollama · Gemma3',
	},
	{
		name: 'AI Driven ESLint Plugin',
		org: 'Cafe24 · 연구',
		period: '2025.07',
		summary:
			'컨벤션 문서 자체를 린팅할 수 있다면 어떨까에서 출발한 연구. 별도 플러그인 설치 없이 자연어로 쓴 규칙을 이해하고 자동으로 린팅하는 기능을 구현했습니다.',
		highlights: ['Ollama와 Gemma3 로컬 세팅', 'ESLint 플러그인용 프롬프트 및 기능 구현'],
		stack: 'ESLint · TypeScript · Ollama · Gemma3',
	},
	{
		name: 'Cafe24 Analytics',
		org: 'Cafe24',
		period: '2025.05 — 2025.06',
		summary:
			'어떤 고객이 유입되고 어느 연령층이 주 고객인지, 어느 지역에서 매출이 발생하는지를 보여주는 쇼핑몰 통계 서비스.',
		highlights: [
			'커서로 100% 바이브 코딩하여 팝업 페이지 100개 제작',
			'Figma to React 디자인 정합성 맞추기',
			'FE MCP (Figma · Jira · Slack) 개발',
			'ADK 멀티에이전트 FE 자동화 연구 개발',
			'2024년 커서 에디터 사용기 발표 후 전사 도입 결정',
		],
		stack: 'Next.js · React · TypeScript · TanStack Query · shadcn · Tailwind · Zustand · Axios',
		href: 'https://support.cafe24.com/hc/ko/articles/48207046448409-%EC%B9%B4%ED%8E%9824-%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A4-%EC%95%8C%EC%95%84%EB%B3%B4%EA%B8%B0',
		image: '/images/works/analytics.jpg',
		imageAlt:
			'카페24 애널리틱스 안내 문서 화면. 통합 분석과 방문자 집계 방식, 인사이트 기능이 항목별로 정리되어 있다.',
	},
	{
		name: '유튜브 샵스 어필리에이트',
		org: 'Cafe24',
		period: '2024.10',
		summary:
			'유튜버가 쇼핑몰 상품 링크를 채널에 올려 홍보하면 판매수익을 함께 나누는 서비스. 5일 안에 완성해야 하는 조건에서 진행했습니다.',
		highlights: [
			'레이어 시프트 문제 해결',
			'Bundle Analyzer로 vite 최적화',
			'반응형 모달 · 텍스트 복사 HOC · carousel 컴포넌트 개발',
		],
		stack: 'React · TypeScript · React Query · Cafe24 Design System · Recoil · react-hook-form',
		href: 'https://www.cafe24.com/youtubeshopping/affiliate.html',
		image: '/images/works/affiliate.jpg',
		imageAlt: '유튜브 쇼핑 제휴 제품 검색 화면. 상단 배너 아래로 카테고리 아이콘과 제휴 상품 목록이 놓여 있다.',
	},
	{
		name: '에디봇 렌더',
		org: 'Cafe24',
		period: '2024.01 — 2024.06',
		summary:
			'회원가입만으로 상품 상세페이지가 자동 생성되도록 API 요청만으로 Playwright가 에디봇 편집을 대신 수행하는 백엔드 서버를 만들었습니다.',
		highlights: [
			'환경별 동작 차이를 흡수하는 체이닝 패턴 environment 함수 개발',
			'로깅과 3회 재시도 retry 함수로 저사양 환경의 제어 실패 방지',
			'파드 3개 제한을 위한 Redis 락 구현, RabbitMQ 무한루프에 Backoff 전략 적용',
			'Docker에서 종료되지 않는 Playwright를 좀비 프로세스로 만들어 최적화',
			'엘라스틱서치 기반 로깅과 그라파나 대시보드 구성',
		],
		stack: 'Next.js · TypeScript · Prisma · Redis · amqplib · Docker · Playwright · winston',
	},
	{
		name: 'EC 어드민',
		org: 'Cafe24',
		period: '2023.09 — 2024.08',
		summary:
			'상품 등록, 재고 관리, 쇼핑몰 설정, 매출 그래프를 담당하는 쇼핑몰 관리 대시보드. PHP로 작성되어 있던 화면을 React·TypeScript로 점진 전환했습니다.',
		highlights: [
			'멀티쇼핑몰 설정 페이지 개발',
			'재입고 알림 설정 및 알림 기능 개발',
			'Pn룰로 GitLab MR 비동기 커뮤니케이션',
			'AI Review로 리뷰 정확도 향상, One Click Man으로 커밋 메시지 자동생성',
			'Figma to Code 토스터로 React 컴포넌트 자동 생성',
		],
		stack: 'React · TypeScript · React Query · CDS · TanStack Router · Recoil · vite · i18n',
		href: 'https://www.cafe24.com',
		image: '/images/works/ecadmin.jpg',
		imageAlt: '카페24 서비스 메인 화면. "PRO와 함께라면" 문구와 쇼핑몰 시작 버튼이 놓여 있다.',
	},
	{
		name: 'AI 헬프센터',
		org: 'Cafe24',
		period: '2023.11 — 2023.12',
		summary:
			'단순 사용성 문의는 AI 챗봇이 해결하고 복잡한 문의는 AI가 필요한 정보를 먼저 모아 CS 처리를 가속하는 서비스.',
		highlights: [
			'아토믹 디자인 패턴 컴포넌트 적용',
			'병렬 네트워크 호출 및 AI 응답 로딩 화면 전환 애니메이션',
			'SSE로 실시간 도착하는 AI 응답을 채팅 화면에 구현',
			'스켈레톤 UI 구현',
		],
		stack: 'Next.js · React · TypeScript · React Query · MUI 기반 CDS · Framer Motion · Zustand',
		href: 'https://support.cafe24.com/hc/ko-kr',
		image: '/images/works/helpcenter.jpg',
		imageAlt:
			'카페24 헬프센터 메인 화면. "무엇을 도와드릴까요?" 검색창과 추천 키워드, 쇼핑몰 가이드 카드가 놓여 있다.',
	},
	{
		name: 'ChatGPT 프롬프트 최적화 툴',
		org: 'Cafe24',
		period: '2024.08',
		summary:
			'프롬프트를 작성할 때마다 품질 편차가 생기는 문제를 줄이기 위한 사내 공유 도구. 작성 → AI 최적화 → 평가 → 개선을 반복합니다.',
		highlights: [
			'Confluence에서 ImportMap으로 React 프로젝트 구성',
			'LocalStorage를 useRecoilState처럼 사용하도록 추상화',
		],
		stack: 'ImportMap · React · styled-components · TypeScript · TanStack Router · OpenAI API',
	},
	{
		name: 'CS AI 자동화',
		org: 'Cafe24',
		period: '2024.06',
		summary: 'CS팀과 운영팀을 거치며 지연되던 기술문의 처리를 AI와 TF-IDF 알고리즘으로 분류·검색해 단축했습니다.',
		highlights: [
			'React에서 TF-IDF 검색 알고리즘으로 문답 검색 구현',
			'n8n에서 TF-IDF로 Confluence 링크 생성',
			'OpenAI API로 기술문의와 일반문의를 분류하는 프롬프트 엔지니어링',
		],
		stack: 'ImportMap · React · TypeScript · OpenAI API · Slack API · Jira API · n8n',
	},
	{
		name: '이지픽',
		org: 'Cafe24',
		period: '2022.08 — 2023.02',
		summary:
			'발품을 팔지 않아도 의류 사입 절차를 처리하는 서비스. 사입·물류·배송·세금계산·거래명세서를 한 번에 다룹니다. 소매상용, 사입삼촌용, 관리자용 세 가지를 개발했습니다.',
		highlights: ['검색 필터 추가 작업', '버그 수정 및 PC·모바일 화면 유지보수'],
		stack: 'jQuery · PHP',
		href: 'https://easypick.co.kr/sign/front/in',
		image: '/images/works/easypick.jpg',
		imageAlt: '이지픽 랜딩 화면. "쇼핑몰 사장님들의 목소리로 만든 가장 쉬운 사입" 문구와 가입 버튼이 놓여 있다.',
	},
	{
		name: 'Buzzle BDS',
		org: 'coFound · 프리랜서',
		period: '2022.02 — 진행중',
		summary:
			'MUI 기반으로 만든 버즐 디자인 시스템. 일관된 사용자 경험과 개발 생산성을 위해 도입했고 새 인원이 합류해도 적응 허들이 낮도록 설계했습니다.',
		highlights: ['MUI 오버라이드', 'NPM 패키지 배포', 'Next.js SSR을 지원하도록 컴포넌트 래핑'],
		stack: 'React · motion · d3 · TanStack Table · MUI · emotion',
		href: 'https://www.npmjs.com/package/@buzzle/bds',
		image: '/images/works/bds.jpg',
		imageAlt: 'npm에 배포된 @buzzle/bds 패키지 페이지. README와 설치 명령, 주간 다운로드 그래프가 함께 보인다.',
	},
	{
		name: 'IT 커뮤니티 코파운드',
		org: '프리랜서',
		period: '2022.10 — 2024.02',
		summary:
			'개발자·디자이너·기획자를 위한 질의응답과 채팅 커뮤니티. 디자이너·프론트·백엔드 6인팀을 이끌고 주말 프로젝트로 개발했습니다.',
		highlights: [
			'PC·모바일 모노레포 프로젝트 구성',
			'WYSIWYG 에디터 구현',
			'아토믹 디자인과 컴파운드 컴포넌트 디자인 시스템 구축',
			'Stackflow로 모바일 버전 화면 개발',
			'GitHub Actions로 CI 구축, LetsEncrypt 적용',
		],
		stack: 'Yarn Workspace · React · Zustand · Emotion · Next.js · TypeScript · Stackflow · NextAuth',
	},
	{
		name: '라이센스 관리 시스템',
		org: '하이퍼 팀 프로젝트 · 프리랜서',
		period: '2020.12 — 2021.01',
		summary:
			'소프트웨어 크랙 문제에 대응하는 온라인 인증 서비스. 미국·일본·한국 개발자가 디스코드로 라이브 코딩하며 함께 만들었습니다.',
		highlights: [
			'C++로 작성된 암호화 모듈과 연동',
			'동접자 계산 알고리즘, BitFlag 2중 권한 확인',
			'느린 접속 환경을 위한 스켈레톤 컴포넌트 및 UX 구조 연구',
			'한국어 · 일본어 · 중국어 제공',
			'PHP REST 프레임워크(phpExpress)와 ORM(phpSequelize)을 직접 만들어 오픈소스화',
		],
		stack: 'Nuxt.js · Vuetify · PHP · JWT · i18next · 암호화',
	},
	{
		name: 'Entum 라이센스 관리 · C# 빌더',
		org: '하이퍼 팀 프로젝트 · 프리랜서',
		period: '2020.09 — 2020.11',
		summary:
			'개발자의 소프트웨어를 보호하는 두 가지 방법 중 Electron 빌더를 담당했습니다. 인증된 계정에서만 암호화된 소스를 내려받아 빌드합니다.',
		highlights: [
			'웹 인증 라이센스 정보를 Electron 내에서 암호화해 전역 상태로 관리',
			'인증 계정에서 암호화된 소스 다운로드 후 빌드 실행',
			'i18next로 7개 국어 번역 적용',
			'GitHub을 이용한 자동 업데이트 구현',
		],
		stack: 'Nuxt.js · Vuex · Electron · C# · .NET · RSA · JWT · Vuetify',
	},
	{
		name: 'AI 관제 시스템',
		org: '주식회사 소프트젠 · 인턴',
		period: '2021.03 — 2021.07',
		summary:
			'세창화학 생산설비의 센서 빅데이터를 LSTM으로 학습시켜 미래에 발생할 장애를 사전 탐지하는 예지 보전 관제 시스템.',
		highlights: [
			'LSTM 모델 및 Anomaly Detection 연구 개발',
			'Memoization과 Lazy 로드로 컴포넌트 지연 로드 구현',
			'네비게이션 가드 및 BitFlag 2중 권한 확인',
			'전역 함수·컴포넌트 사용을 위해 react-global-components를 만들어 오픈소스화',
		],
		stack: 'React · Redux · TypeScript · Express · Sequelize · Flask · TensorFlow · MySQL · Redis · InfluxDB',
	},
	{
		name: '권역별 대기개선 통합관리 시스템',
		org: '주식회사 소프트젠 · 인턴',
		period: '2021.03 — 2021.07',
		summary: '환경부 환경 정책의 효과와 영향, 연구 자료를 공유하고 환경 데이터를 입력·평가하는 시스템의 유지보수.',
		highlights: [
			'디자인 교체 작업',
			'엑셀 다운로드 및 업로드 구현',
			'프로젝트 리팩터링, 코드 퍼포먼스 개선, SQL Injection 보안 작업',
		],
		stack: 'Spring Boot · Thymeleaf · Oracle',
	},
	{
		name: '우리마을가게 상권분석 설문조사 시스템',
		org: '피타그래프 · 인턴',
		period: '2019.07 — 2019.08',
		summary:
			'서울 신용보증센터의 소상공인 방문 이후 수요 조사와 상권분석 서비스에서 쓰이는 설문조사 시스템을 개발했습니다.',
		highlights: [
			'대학 통합 설문조사 시스템을 변경·적용',
			'카드 방식 설문 문항 추가 개발',
			'구세대 Oracle에서 비효율적으로 동작하는 쿼리 개선',
		],
		stack: 'Spring MVC · Vue.js · Oracle',
		href: 'https://www.koreascience.or.kr/article/CFKO201924664108144.page',
		image: '/images/works/survey.jpg',
		imageAlt: '대학 통합 설문조사 시스템 설계 및 구축 논문 페이지. 저자 목록에 장석현이 포함되어 있다.',
	},
	{
		name: '바이럴 마케팅 통합 도구',
		org: '에이원네트웍스 · 인턴',
		period: '2016.07 — 2016.08',
		summary: '호스팅 회사의 네이버 블로그 게시글을 티스토리로 옮기고 새로운 마케팅 활로를 찾는 업무.',
		highlights: [
			'네이버 블로그 · 티스토리 · 페이스북 · 인스타그램 통합 관리 도구 개발',
			'네이버 블로그에서 티스토리로 데이터 이전 도구 개발',
		],
		stack: 'AutoIt · 마케팅 자동화',
	},
];
