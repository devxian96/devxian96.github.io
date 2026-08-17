import { PageHeader } from '@/components/molecules/PageHeader';
import { getChangelogHtml } from '@/utils/docs';

export const ChangelogTemplate = () => {
	const html = getChangelogHtml();

	return (
		<main>
			<PageHeader
				title="변경 이력"
				description="이 사이트에 무엇을 언제 바꿨는지. 저장소의 CHANGELOG.md를 그대로 읽어 옵니다."
			/>

			<div className="mx-auto max-w-3xl px-6 section-y">
				{/* 저장소 안의 파일만 소스이고 빌드 시점에만 변환된다. 외부 입력이 섞이는 경로가 없다. */}
				<div
					className="prose max-w-none prose-neutral dark:prose-invert"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
		</main>
	);
};
