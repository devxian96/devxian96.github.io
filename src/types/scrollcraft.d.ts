/** public/scrollcraft/scrollcraft.js가 window에 올리는 엔진. 페이지는 mount만 부른다. */
interface ScrollCraftEngine {
	mount: (root: Element | Document | string) => unknown;
	instances: unknown[];
}

interface Window {
	ScrollCraft?: ScrollCraftEngine;
}
