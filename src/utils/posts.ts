import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const POSTS_DIR = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
	slug: string;
	title: string;
	description: string;
	date: string;
	tags: string[];
}

export interface Post extends PostMeta {
	html: string;
}

/**
 * frontmatter의 `date: 2026-08-17`은 따옴표가 없으면 YAML 파서가 Date 객체로 바꿔버린다.
 * 그대로 흘리면 문자열로 취급하는 정렬·포맷 쪽에서 터지므로, 읽는 지점에서 한 번만 정규화한다.
 */
const toDateString = (value: unknown) => {
	if (value instanceof Date) return value.toISOString().slice(0, 10);

	return typeof value === 'string' ? value : '';
};

const readPostFile = (slug: string) => {
	const raw = fs.readFileSync(path.join(POSTS_DIR, `${slug}.md`), 'utf8');
	const parsed = matter(raw);
	const data = parsed.data as Record<string, unknown>;

	return {
		content: parsed.content,
		meta: {
			slug,
			title: typeof data.title === 'string' ? data.title : slug,
			description: typeof data.description === 'string' ? data.description : '',
			date: toDateString(data.date),
			tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
		} satisfies PostMeta,
	};
};

/** content/posts 아래 마크다운 파일명이 곧 slug다. 빌드 시점에만 호출된다. */
export const getPostSlugs = () => {
	if (!fs.existsSync(POSTS_DIR)) return [];

	return fs
		.readdirSync(POSTS_DIR)
		.filter((name) => name.endsWith('.md'))
		.map((name) => name.replace(/\.md$/, ''));
};

/** 목록용 메타데이터. 최신 글이 먼저 온다. */
export const getPostMetas = (): PostMeta[] =>
	getPostSlugs()
		.map((slug) => readPostFile(slug).meta)
		.sort((left, right) => right.date.localeCompare(left.date));

export const getPost = (slug: string): Post => {
	const { content, meta } = readPostFile(slug);

	// marked는 async 확장이 없으면 동기로 문자열을 돌려준다.
	// 정적 export라 이 변환은 전부 빌드 시점에 끝난다.
	return { ...meta, html: marked.parse(content, { async: false }) };
};

/** 2026-08-17 → 2026.08.17 */
export const formatPostDate = (date: string) => date.replaceAll('-', '.');
