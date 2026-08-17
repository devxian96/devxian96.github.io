interface Props {
	title: string;
	description: string;
}

/** 하위 페이지의 첫 화면. 페이지가 무엇을 담는지 한 문장으로 먼저 말한다. */
export const PageHeader = ({ title, description }: Props) => {
	return (
		<header className="border-b bg-card">
			<div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 pt-20 pb-16 sm:pt-24 sm:pb-20">
				<h1 className="font-display text-[clamp(2.25rem,5.5vw,4rem)] leading-[1.12] tracking-[-0.035em]">
					{title}
				</h1>
				<p className="measure text-lg/relaxed text-muted-foreground">{description}</p>
			</div>
		</header>
	);
};
