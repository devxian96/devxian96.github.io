# devxian96.github.io

장석현(Seokhyun Jang)의 포트폴리오 사이트. <https://devxian96.github.io>

> 없으면 만든다.

## 스택

Next.js 16 · React 19 · TypeScript 5.9 (strict) · Tailwind CSS v4 · shadcn/ui · Zustand 5 · motion 12

GitHub Pages에 정적 export(`output: 'export'`)로 배포된다.

## 실행

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

pnpm 전용이다 (`preinstall`이 npm/yarn을 막는다). Node 22.14.0 이상.

## 스크립트

| 명령              | 설명                  |
| ----------------- | --------------------- |
| `pnpm dev`        | 개발 서버 (port 3000) |
| `pnpm build`      | 정적 빌드 → `out/`    |
| `pnpm lint`       | ESLint                |
| `pnpm eslint:fix` | ESLint 자동 수정      |
| `pnpm type-check` | `tsc --noEmit`        |
| `pnpm prettier`   | 포맷팅                |

## 배포

`main` 푸시 → GitHub Actions가 lint → type-check → build → Pages 업로드. 게이트 하나라도 실패하면 배포되지 않는다.

## 글 쓰기

`content/posts/`에 마크다운 파일을 하나 넣으면 끝이다. 파일명이 URL slug가 되고, 빌드할 때 정적 페이지로 뽑힌다.

```markdown
---
title: 글 제목
description: 목록 카드에 쓰이는 한 줄
date: 2026-08-17
tags: [Next.js, 회고]
---

본문
```

## 구조

설정·린트 룰·디렉토리 구조는 `buzzle-landing`을 정본으로 맞췄다. 컴포넌트 계층 규칙과 25개 커스텀 ESLint 룰은 [AGENTS.md](./AGENTS.md), 아키텍처 상세는 [CLAUDE.md](./CLAUDE.md)에 있다.

포트폴리오 내용(프로필·작업물·프로젝트·연혁·스택)은 전부 `src/constants/`에 있다. 이력을 고칠 일이 생기면 컴포넌트가 아니라 이쪽을 본다.

## 라이선스

MIT
