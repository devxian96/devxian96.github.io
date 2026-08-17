import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PostActions } from '@/app/(blog)/blog/[slug]/components/organisms/PostActions';
import { formatPostDate } from '@/utils/posts';

interface Props {
	title: string;
	date: string;
	tags: string[];
	html: string;
}

export const PostArticle = ({ title, date, tags, html }: Props) => {
	return (
		<article className="mx-auto max-w-3xl px-6 py-24">
			<Link
				href="/blog"
				className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
			>
				<ArrowLeft className="size-4" />
				blog
			</Link>

			<header className="mb-12 flex flex-col gap-4 border-b pb-8">
				<time dateTime={date} className="font-mono text-sm text-muted-foreground">
					{formatPostDate(date)}
				</time>
				<h1 className="font-display text-3xl tracking-tight sm:text-4xl">{title}</h1>
				<div className="flex flex-wrap gap-2">
					{tags.map((tag) => (
						<span key={tag} className="text-xs text-muted-foreground">
							#{tag}
						</span>
					))}
				</div>

				<div className="mt-2">
					<PostActions title={title} />
				</div>
			</header>

			{/* 마크다운은 저장소 안의 파일이고 빌드 시점에만 변환된다. 외부 입력이 섞이는 경로가 없다.
			    data-post-body는 복사 버튼이 본문 텍스트를 읽어가는 지점이다. */}
			<div
				data-post-body
				className="prose max-w-none prose-neutral dark:prose-invert"
				dangerouslySetInnerHTML={{ __html: html }}
			/>
		</article>
	);
};
