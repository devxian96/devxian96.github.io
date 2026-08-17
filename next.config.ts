import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	// GitHub Pages는 정적 파일만 서빙한다. Node 런타임이 없으므로 buzzle-landing의
	// `standalone`이 아니라 `export`로 out/ 디렉토리를 통째로 뽑아낸다.
	// 이 설정 때문에 서버 전용 기능(rewrites, headers, ISR, Route Handler)은 쓸 수 없다.
	output: 'export',
	reactStrictMode: true,
	// 정적 export에는 이미지 최적화 서버가 없다.
	images: {
		unoptimized: true,
	},
	// out/about.html 대신 out/about/index.html로 뽑아 Pages에서 확장자 없는 URL이 동작하게 한다.
	trailingSlash: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},
	turbopack: {
		rules: {
			'*.svg': {
				loaders: ['@svgr/webpack'],
				as: '*.js',
			},
		},
	},
};

export default nextConfig;
