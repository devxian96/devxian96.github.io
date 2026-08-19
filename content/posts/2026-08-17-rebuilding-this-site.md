---
title: 이 사이트를 다시 지었습니다
description: MUI와 Recoil을 걷어내고 Next 16 · Tailwind v4 · 커스텀 ESLint 룰 25개 위에 포트폴리오를 다시 올린 기록.
date: 2026-08-17
tags: [Next.js, Tailwind, ESLint, 회고]
---

포트폴리오 사이트를 처음부터 다시 지었습니다. 예전 스택은 Next 14, React 18, MUI 5, 그리고 Recoil이었습니다. Recoil은 2024년에 아카이브됐고 MUI 위에 얹어둔 테마 코드는 손댈 때마다 어디를 고쳐야 할지 헷갈렸습니다. 무엇보다 화면이 비어 있었습니다.

## 무엇을 바꿨나

|               | 이전                      | 지금                           |
| ------------- | ------------------------- | ------------------------------ |
| 패키지 매니저 | yarn 4 (PnP zero-install) | pnpm 10                        |
| Next / React  | 14.2.4 / 18.3.1           | 16.0.10 / 19.2.3               |
| 스타일        | MUI 5 + emotion           | Tailwind v4 + shadcn/ui        |
| 상태          | Recoil                    | Zustand 5                      |
| ESLint        | 8 (`.eslintrc`)           | 9 flat config + 커스텀 룰 25개 |

## 규칙을 먼저 옮겼다

회사에서 쓰는 랜딩 프로젝트의 설정을 그대로 가져왔습니다. prettier·commitlint·husky·lint-staged 같은 흔한 것들뿐 아니라 팀에서 반복해서 지적하던 것들을 규칙으로 굳혀둔 커스텀 ESLint 플러그인 25개까지 함께 옮겼습니다.

- `no-hooks-in-page` — `page.tsx`는 Template 하나만 렌더한다
- `ddd-hook-restriction` — atoms·molecules·templates에서는 hook 금지, organisms는 추상화된 커스텀 훅만
- `max-props`, `no-super-hook` — 슈퍼 컴포넌트와 슈퍼 훅 차단
- `no-barrel-files`, `no-eslint-disable`, `enforce-props-interface`

개인 프로젝트에 이렇게까지 할 필요가 있냐고 물으면, 있습니다. 규칙이 없으면 반년 뒤의 내가 다시 스파게티를 만듭니다.

## 걸린 것 두 가지

### Tailwind v4가 라이트 테마를 통째로 지웠다

`@theme` 블록에 라이트 토큰을, `.dark` 블록에 다크 오버라이드를 넣었습니다. 그런데 다크 클래스를 떼도 화면이 계속 어두웠습니다.

컴파일된 CSS를 열어보니 `--color-background: #fff`가 아예 없었습니다. Tailwind v4는 `@theme`의 변수 중 **유틸리티에서 실제로 참조된 것만** 내보냅니다. 라이트 값은 `.dark`가 덮어쓰는 기본값이라 직접 참조되는 곳이 없었고 그대로 잘려나간 겁니다.

```css
/* 이러면 잘린다 */
@theme {
	--color-background: #ffffff;
}

/* 이러면 남는다 */
@theme static {
	--color-background: #ffffff;
}
```

### 테마가 한 프레임 깜빡였다

Zustand persist를 `skipHydration: true`로 두고 마운트 후에 `rehydrate()`를 부르는 구조입니다. 처음에는 이렇게 짰습니다.

```ts
useEffect(() => {
	rehydrate();
}, []);
useEffect(() => {
	syncTheme(mode);
}, [mode]);
```

두 번째 effect가 잡고 있는 `mode`는 렌더 시점에 캡처된 값입니다. 즉 rehydrate가 라이트를 채워 넣어도 같은 커밋에서는 여전히 다크로 한 번 칠하고 다음 렌더에서야 되돌립니다. 구독을 rehydrate보다 먼저 걸어 해결했습니다.

```ts
useEffect(() => {
	const unsubscribe = useThemeModel.subscribe((state) => syncTheme(state.mode));
	void useThemeModel.persist.rehydrate();

	return unsubscribe;
}, []);
```

## 블로그

지금 읽고 계신 이 글도 저장소 안의 마크다운 파일 하나입니다. `content/posts/`에 `.md`를 넣으면 빌드할 때 정적 페이지로 뽑힙니다. 백엔드도 CMS도 없습니다.

예전 Nuxt 포트폴리오도 같은 방식이었습니다. 그때는 nuxt-content였고 지금은 gray-matter와 marked라는 것만 다릅니다. 되는 방식은 굳이 바꾸지 않았습니다.

## 배포

`main`에 푸시하면 GitHub Actions가 lint → type-check → build 순으로 돌리고 전부 통과해야 GitHub Pages에 올라갑니다. 로컬에서 수동으로 배포하는 경로는 없앴습니다.
