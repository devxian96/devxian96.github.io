# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
pnpm dev              # Dev server on port 3000
pnpm build            # Static export → out/
pnpm lint             # ESLint
pnpm eslint:fix       # ESLint --fix (Tailwind class order 등 자동 정리)
pnpm type-check       # tsc --noEmit
pnpm prettier         # Prettier --write .
```

Package manager is **pnpm** (enforced — npm/yarn will fail). Node >= 22.14.0.

Pre-commit hooks run automatically via Husky + lint-staged (Prettier → ESLint → tsc on staged files). Commit messages must follow Conventional Commits (commitlint).

## Architecture

**Next.js 16 App Router**, TypeScript strict mode, 정적 export. 설정과 린트 룰은 `buzzle-landing`을 정본으로 삼되, GitHub Pages 제약에 맞게 서버 의존 항목만 뺐다.

### 정적 export 제약

`next.config.ts`의 `output: 'export'`가 전제다. GitHub Pages에는 Node 런타임이 없으므로 다음은 쓸 수 없다:

- Route Handler / Server Action
- `rewrites`, `redirects`, `headers` (CSP는 여기서 못 건다)
- ISR, `revalidate`
- `next/image` 최적화 (`images.unoptimized: true`)

`trailingSlash: true`로 두어 `out/about/index.html`이 생성되고, Pages에서 `/about` URL이 동작한다.

### Route Groups

| Group    | Paths    | Notes                                           |
| -------- | -------- | ----------------------------------------------- |
| `(main)` | `/`      | Hero → Now → Works → Timeline → Stack → Contact |
| `(sub)`  | `/about` | 자기소개 본문                                   |

### Component Organization (Route Co-location + Atomic Design)

도메인별 컴포넌트는 해당 라우트 디렉토리에 co-locate 한다. 여러 라우트가 함께 쓰는 것만 `src/components/`에 둔다.

```
src/app/(main)/
  page.tsx                                # Server Component (Template만 import)
  components/
    templates/HomeTemplate.tsx            # organisms 조합
    organisms/HeroSection.tsx             # 섹션 단위
```

**공유 컴포넌트** (`src/components/`):

- `atoms/button.tsx` — shadcn/ui 프리미티브. 구조 룰 면제 대상이다.
- `molecules/` — SectionHeading, WorkCard, TimelineItem, StackRow, Footer
- `organisms/Header/` — 모든 라우트가 쓰는 헤더

Pages import one Template and render it:

```tsx
const Page = () => <SomeTemplate />;
export default Page;
```

### 정적 데이터

`no-static-array-map` 규칙 때문에, 같은 파일에서 선언한 모듈 스코프 배열은 JSX에서 `.map()` 할 수 없다. 포트폴리오 데이터(작업물, 연혁, 스택, 프로필)는 전부 `src/constants/`에 두고 import 해서 렌더한다. 이력을 고칠 일이 생기면 컴포넌트가 아니라 이쪽을 본다.

### State Management

`src/stores/themeModel.ts`의 Zustand store가 라이트/다크 상태를 localStorage에 저장한다. `skipHydration: true`이므로 `src/hooks/useTheme.ts`가 마운트 후 수동으로 `rehydrate()` 한다.

DOM 반영은 `useThemeModel.subscribe()`로 처리하고, 구독을 rehydrate보다 **먼저** 건다. 순서를 뒤집으면 저장된 라이트 모드가 적용되기 전에 다크 클래스가 한 프레임 남는다.

`src/app/layout.tsx`의 `THEME_BOOTSTRAP` 인라인 스크립트가 첫 페인트 전에 저장값을 적용해 깜빡임을 없앤다. 서버 마크업은 항상 `class="dark"`로 나가므로, 라이트 사용자만 이 스크립트가 클래스를 떼어낸다.

### Styling

Tailwind CSS v4 + shadcn/ui (new-york, neutral base). 디자인 토큰은 `src/styles/globals.css`의 `@theme static`에 있고, 시그니처 컬러는 `#00aaff`다. 커스텀 유틸리티(`bg-dot-grid`, `bg-brand-glow`)는 `@layer utilities`가 아니라 `@utility` 디렉티브로 등록해야 `eslint-plugin-better-tailwindcss`가 인식한다.

motion(`motion/react`)은 Hero 진입 애니메이션에만 쓴다. SVG는 `@svgr/webpack`으로 React 컴포넌트로 가져온다.

### Path Alias

`@/*` maps to `./src/*`.

## Deployment

`main`에 푸시하면 `.github/workflows/deploy.yml`이 lint → type-check → build → Pages 업로드를 순서대로 돌린다. 어느 게이트든 실패하면 배포하지 않는다. 로컬에서 수동 배포하는 경로는 없다.
