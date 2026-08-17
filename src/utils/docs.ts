import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

/**
 * 저장소 루트의 문서 파일을 빌드 시점에 읽어 HTML로 바꾼다.
 *
 * CHANGELOG.md와 LICENSE는 릴리스 도구와 라이선스 원본이 관리하는 파일이라
 * 화면용으로 따로 복사해두면 반드시 어긋난다. 원본 하나만 읽는다.
 */
const readRepoFile = (filename: string) => fs.readFileSync(path.join(process.cwd(), filename), 'utf8');

export const getChangelogHtml = () => marked.parse(readRepoFile('CHANGELOG.md'), { async: false });

/** LICENSE는 마크다운이 아니라 평문이다. 줄바꿈을 그대로 살려야 조항이 뭉개지지 않는다. */
export const getLicenseText = () => readRepoFile('LICENSE');
