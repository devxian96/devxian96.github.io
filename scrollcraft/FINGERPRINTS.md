# Fingerprints

Every site you build with **scroll-craft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating _yourself_, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build                       | Grammar                                 | Nav treatment                                                                                                 | Hero device                                                                                                                   | Act-sequence shape                                                                   | Close pattern                                                                                                    | Signature move                                                                                              | World                                                             | Port                                                           |
| --------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------- |
| devxian96-home (2026-09-06) | Split stage: 종이(없으면) 대 밤(만든다) | 고정 바 없음. 가운데 선이 chrome: 양쪽 라벨 + 진행 채움 + 正 tally. 사이트 링크는 히어로 밤 쪽 상단과 결말 안 | 50/50 pin, 밤 열 안에서만 4층 parallax(사진·제목·실제 스크린샷 2·안개) + 포인터 미세 반응. 두 단어가 선을 사이에 두고 한 문장 | pin(parallax) > pin(쌍 cue) > pin(reveal) > pin(count) > pin(bespoke) · 5막 · 16.1vh | 붕괴: 선이 왼쪽 끝으로, 밤이 종이를 clip-path로 삼킴. CTA는 이긴 열에, 마지막 cue 홀드. 결말 앞 authored silence | 장부 세로줄에 만든 것을 지날 때마다 正 획이 한 획씩 그어지고, 붕괴 때 선과 함께 끝까지 따라가 총합으로 남음 | Low-key cinematic, 시안-블루 키 (스틸 1장) + 실제 서비스 스크린샷 | Next.js 16 정적 export, 엔진은 public/scrollcraft, 홈 라우트만 |

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Split stage** 문법과 그 닫힘(붕괴로 한 열이 전폭). 다음 빌드는 다른 문법.
- **선이 chrome**인 nav 처리(라벨 + 진행 + tally). 고정 바 없음.
- **正 tally** 시그니처 무브. 세는 것을 인터랙션으로 옮기는 어떤 변형도 이것과 겹친다.
- 5막 · 16.1vh · 전부 pin. 다음 빌드는 flow/pan/scrub가 섞인 다른 모양이어야 한다.
- 히어로 = 50/50 두 단어 + 한 열 안의 parallax 층.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scroll-craft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.
