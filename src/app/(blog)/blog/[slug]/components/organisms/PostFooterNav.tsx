import Link from 'next/link';
import { formatPostDate, getPostMetas } from '@/utils/posts';

interface Props {
	currentSlug: string;
}

/**
 * 글 끝에 목록 자체를 편다. "목록으로 가기" 링크 하나만 두면 한 번 더 눌러야 하고,
 * 다음에 읽을 글이 무엇인지 알 수 없다. 지금 보고 있는 글은 링크를 걸지 않는다.
 */
export const PostFooterNav = ({ currentSlug }: Props) => {
	const posts = getPostMetas();

	return (
		<nav className="border-t bg-card" aria-label="글 목록">
			<div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
				<h2 className="font-display text-xl tracking-[-0.02em]">글 목록</h2>

				<ul className="flex flex-col border-b">
					{posts.map((post) => (
						<li key={post.slug}>
							{post.slug === currentSlug ? (
								<span
									aria-current="page"
									className="grid items-baseline gap-1 border-t py-5 md:grid-cols-[8rem_1fr] md:gap-8"
								>
									<time dateTime={post.date} className="font-mono text-sm text-muted-foreground">
										{formatPostDate(post.date)}
									</time>
									<span className="flex items-baseline gap-2">
										<span className="font-bold">{post.title}</span>
										<span className="text-xs text-muted-foreground">지금 읽는 글</span>
									</span>
								</span>
							) : (
								<Link
									href={`/blog/${post.slug}`}
									className="group grid items-baseline gap-1 border-t py-5 transition-colors hover:bg-background md:grid-cols-[8rem_1fr] md:gap-8 md:px-4"
								>
									<time dateTime={post.date} className="font-mono text-sm text-muted-foreground">
										{formatPostDate(post.date)}
									</time>
									<span className="font-bold transition-colors group-hover:text-primary">
										{post.title}
									</span>
								</Link>
							)}
						</li>
					))}
				</ul>

				<Link href="/blog" className="w-fit text-sm font-bold underline-offset-4 hover:underline">
					글 전체 보기 →
				</Link>
			</div>
		</nav>
	);
};
