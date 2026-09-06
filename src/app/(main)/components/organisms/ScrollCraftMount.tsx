'use client';

import Script from 'next/script';

/** 엔진은 window 전역 하나만 올린다. 마운트 루트는 body. 막(act)은 그 안에서 찾는다. */
const mountEngine = () => {
	window.ScrollCraft?.mount(document.body);
};

/**
 * scroll-craft 엔진을 홈에서만 싣는다.
 * onReady는 클라이언트 내비게이션으로 다시 들어와도 매번 불린다. 엔진은 unmount가 없어
 * 떠난 뒤에도 리스너가 남지만, 떨어진 노드를 읽어 0을 얻을 뿐 아무 것도 그리지 않는다.
 */
export const ScrollCraftMount = () => {
	return <Script src="/scrollcraft/scrollcraft.js" strategy="afterInteractive" onReady={mountEngine} />;
};
