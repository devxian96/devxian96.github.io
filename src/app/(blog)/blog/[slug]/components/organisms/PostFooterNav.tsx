import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PostCard } from '@/components/molecules/PostCard';
import { getPostMetas } from '@/utils/posts';

interface Props {
	currentSlug: string;
}

/**
 * 글 끝에서 독자를 빈 화면으로 내보내지 않는다.
 * 다른 글이 있으면 목록을, 없으면 목록으로 돌아가는 길만 남긴다.
 */
export const PostFooterNav = ({ currentSlug }: Props) => {
	const others = getPostMetas()
		.filter((post) => post.slug !== currentSlug)
		.slice(0, 4);

	return (
		<nav className="border-t bg-card" aria-label="다른 글">
			<div className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
				<h2 className="font-display text-xl tracking-[-0.02em]">{others.length > 0 ? '다른 글' : '글 목록'}</h2>

				{others.length > 0 ? (
					<div className="flex flex-col border-b">
						{others.map((post) => (
							<PostCard
								key={post.slug}
								slug={post.slug}
								title={post.title}
								description={post.description}
								date={post.date}
								tags={post.tags}
							/>
						))}
					</div>
				) : null}

				<Link
					href="/blog"
					className="inline-flex w-fit items-center gap-2 text-sm font-bold underline-offset-4 hover:underline"
				>
					<ArrowLeft className="size-4" />글 전체 보기
				</Link>
			</div>
		</nav>
	);
};
