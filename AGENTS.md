# AGENTS.md - devxian96.github.io

## 목적

장석현(devxian96)의 개인 포트폴리오 사이트입니다. GitHub Pages로 정적 배포되는 Next.js 16 App Router 애플리케이션입니다.

**기술 스택**: Next.js 16, React 19, TypeScript 5.9 strict, Tailwind CSS v4, shadcn/ui, Zustand 5, motion 12

**요구사항**: pnpm only, Node >=22.14.0. Dev port 3000.

**규칙 출처**: 설정·린트 룰·디렉토리 구조는 `buzzle-landing`을 정본으로 맞췄습니다. 다만 배포 대상이 GitHub Pages이므로 서버 런타임에 의존하는 항목(standalone 출력, rewrites, headers, Sentry, Orval)은 의도적으로 빠져 있습니다.

## 핵심 파일

| 파일                     | 역할                                      |
| ------------------------ | ----------------------------------------- |
| `package.json`           | 의존성 및 스크립트 정의                   |
| `next.config.ts`         | 정적 export(`output: 'export'`), SVG 로더 |
| `tsconfig.json`          | TypeScript strict mode, `@/` alias        |
| `components.json`        | shadcn/ui 컴포넌트 설정                   |
| `eslint.config.mjs`      | ESLint 규칙 및 커스텀 플러그인            |
| `src/styles/globals.css` | Tailwind v4 디자인 토큰(`@theme static`)  |
| `.github/workflows/`     | lint → type-check → build → Pages 배포    |

## 디렉토리 구조

```
devxian96.github.io/
├── src/
│   ├── app/                      # Next.js App Router 라우트
│   │   ├── (main)/               # / — 포트폴리오 본문
│   │   ├── (sub)/about/          # /about
│   │   └── (blog)/blog/          # /blog, /blog/[slug]
│   ├── components/               # 공유 컴포넌트 (atoms, molecules, organisms)
│   ├── constants/                # 정적 데이터 (profile, works, projects, timeline, stack)
│   ├── hooks/                    # 공유 hooks
│   ├── stores/                   # Zustand 클라이언트 상태
│   ├── styles/                   # 글로벌 CSS 및 디자인 토큰
│   └── utils/                    # 유틸리티 함수 (cn, posts)
├── content/posts/                # 블로그 글 (마크다운)
├── lib/eslint-rules/             # 커스텀 ESLint 플러그인 (25개 규칙)
├── public/images/                # 아바타, 프로젝트 스크린샷
└── out/                          # 정적 export 결과 (git 제외)
```

## 블로그

`content/posts/*.md` 하나가 글 하나이고, 파일명이 곧 URL slug다. `src/utils/posts.ts`가 빌드 시점에 읽어 `generateStaticParams`로 페이지를 뽑는다. 백엔드도 CMS도 없다.

frontmatter는 `title` · `description` · `date` · `tags` 네 개다.

```markdown
---
title: 글 제목
description: 목록 카드에 쓰이는 한 줄
date: 2026-08-17
tags: [Next.js, 회고]
---
```

`date`에 따옴표를 붙이지 않으면 YAML 파서가 Date 객체로 바꾼다. `posts.ts`의 `toDateString`이 읽는 지점에서 한 번 정규화하므로 글 쓰는 쪽은 신경 쓸 필요 없다.

본문은 `marked`로 HTML을 만들어 `dangerouslySetInnerHTML`로 넣는다. 저장소 안의 파일만 소스이고 외부 입력이 섞이는 경로가 없어서 sanitize를 두지 않았다 — **외부에서 받은 마크다운을 렌더할 일이 생기면 이 전제가 깨지므로 sanitize를 먼저 붙일 것.**

## AI 에이전트 규칙

### 필수 규칙

- **패키지 매니저**: `pnpm` only. npm/yarn 사용 금지 (`preinstall`이 차단).
- **Page 컴포넌트**: 모든 `page.tsx`는 Server Component로 Template 1개만 렌더
    - hooks 금지 (커스텀 ESLint 규칙: `no-hooks-in-page`)
    - arrow function 컴포넌트 + `interface Props` 필수
    - `NextPage` 타입 사용 금지 (`no-next-page-type`)
- **컴포넌트 크기**: max 5 props / hook params
- **파일 구조**:
    - barrel files 금지
    - `eslint-disable` 금지
    - `@/` alias 필수 (`../../` 상대경로 금지)
    - 파일당 컴포넌트 1개
- **정적 리스트**: 모듈 스코프 배열을 같은 파일에서 `.map()` 하면 `no-static-array-map`에 걸린다. 데이터는 `src/constants/`로 분리해 import 한다.
- **상태 관리**: Zustand. `skipHydration: true` + 커스텀 훅에서 수동 `rehydrate()`.
- **정적 export 제약**: Route Handler, `rewrites`, `headers`, ISR, `next/image` 최적화를 쓸 수 없다.

### DDD 컴포넌트 계층별 hook 제한

| 계층        | hook 사용                                       |
| ----------- | ----------------------------------------------- |
| `atoms`     | 금지                                            |
| `molecules` | 금지 — React hook은 커스텀 훅으로 추상화        |
| `organisms` | 추상화된 커스텀 hook만 (raw `useState` 등 금지) |
| `templates` | 금지 — 순수 composition                         |

하위 계층은 상위 계층을 import 할 수 없다 (`ddd-import-hierarchy`).

### 커스텀 ESLint 플러그인 (25개 규칙)

`lib/eslint-rules/`에 정의. buzzle-landing과 동일한 세트다.

- `no-hooks-in-page`, `max-props`, `max-hook-params`, `no-barrel-files`, `no-eslint-disable`
- `ddd-hook-restriction`, `ddd-import-hierarchy`, `one-component-per-file`, `enforce-props-interface`
- `no-inline-handler`, `no-static-array-map`, `no-nested-ternary-jsx`, `id-min-length` 외

## 주요 개발 흐름

1. **개발 서버**: `pnpm dev` (port 3000)
2. **린트/타입**: `pnpm lint`, `pnpm type-check`
3. **빌드**: `pnpm build` → `out/`
4. **커밋**: Husky + lint-staged + commitlint (Conventional Commits)
5. **배포**: `main` 푸시 시 GitHub Actions가 lint → type-check → build → Pages 업로드

## 디자인 토큰

시그니처 컬러는 `#00aaff`다. `src/styles/globals.css`의 `@theme static` 블록이 라이트 기본값을, `.dark` 블록이 다크 오버라이드를 정의한다. 컴포넌트는 `bg-background`, `text-muted-foreground`처럼 토큰 이름만 쓰고 색상 리터럴을 직접 쓰지 않는다.

`@theme`에 `static`이 붙은 이유 — 붙이지 않으면 Tailwind v4가 "유틸리티에서 참조되지 않은" 라이트 토큰을 트리셰이킹해서, 다크 클래스를 떼도 화면이 어두운 채로 남는다.
