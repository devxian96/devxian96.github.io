import Link from 'next/link';

const NotFound = () => {
	return (
		<main className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-32">
			<h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] tracking-[-0.035em]">
				여긴 아직 안 만들었습니다
			</h1>
			<p className="measure text-lg/relaxed text-muted-foreground">
				주소를 다시 확인해 주세요. 혹시 필요한 화면이라면 만들어 두겠습니다.
			</p>
			<Link
				href="/"
				className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background transition-opacity hover:opacity-85"
			>
				처음으로
			</Link>
		</main>
	);
};

export default NotFound;
