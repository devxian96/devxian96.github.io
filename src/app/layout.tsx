import type { Metadata, Viewport } from 'next';
import type { PropsWithChildren } from 'react';
import { Footer } from '@/components/molecules/Footer';
import { Header } from '@/components/organisms/Header/Header';
import '@/styles/globals.css';

export const metadata: Metadata = {
	metadataBase: new URL('https://devxian96.github.io'),
	title: {
		default: 'devxian96 :: 없으면 만든다',
		template: '%s | devxian96',
	},
	description: '장석현(Seokhyun Jang) — Cafe24에서 AI 홈페이지 빌더를 만드는 풀스택 엔지니어.',
	authors: [{ name: 'Seokhyun Jang', url: 'https://github.com/devxian96' }],
	openGraph: {
		type: 'website',
		locale: 'ko_KR',
		siteName: 'devxian96',
		title: 'devxian96 :: 없으면 만든다',
		description: '장석현(Seokhyun Jang) — Cafe24에서 AI 홈페이지 빌더를 만드는 풀스택 엔지니어.',
	},
};

export const viewport: Viewport = {
	themeColor: '#00aaff',
};

/**
 * 저장된 테마를 첫 페인트 전에 적용한다.
 *
 * themeModel의 기본값이 'dark'라 서버 마크업은 항상 dark로 나간다. 라이트 모드를
 * 고른 사용자는 rehydrate가 끝날 때까지 어두운 화면을 한 프레임 보게 되는데,
 * 이 스크립트가 블로킹으로 먼저 돌아 그 깜빡임을 없앤다.
 */
const THEME_BOOTSTRAP = `
try {
  var stored = JSON.parse(localStorage.getItem('devxian96-theme') || '{}');
  if (stored && stored.state && stored.state.mode === 'light') {
    document.documentElement.classList.remove('dark');
  }
} catch (error) {}
`;

const RootLayout = ({ children }: PropsWithChildren) => {
	return (
		<html lang="ko" className="dark" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/favicon.ico" sizes="128x128" />
				<script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
			</head>
			<body className="min-h-dvh antialiased">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
