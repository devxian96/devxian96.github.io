import { PageHeader } from '@/components/molecules/PageHeader';
import { getLicenseText } from '@/utils/docs';

export const LicenseTemplate = () => {
	const text = getLicenseText();

	return (
		<main>
			<PageHeader
				title="라이선스"
				description="이 사이트의 소스는 MIT 라이선스로 공개되어 있습니다. 저장소의 LICENSE 원문 그대로입니다."
			/>

			<div className="mx-auto max-w-3xl px-6 section-y">
				{/* 평문이라 마크다운 변환 없이 줄바꿈을 살려 그대로 보여준다. */}
				<pre className="overflow-x-auto rounded-card border bg-card p-6 font-mono text-sm/relaxed whitespace-pre-wrap">
					{text}
				</pre>

				<p className="mt-8 text-sm/relaxed text-muted-foreground">
					글과 이미지 등 콘텐츠의 저작권은 저에게 있습니다. 코드만 자유롭게 가져가 쓰세요.
				</p>
			</div>
		</main>
	);
};
