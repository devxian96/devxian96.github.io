interface Props {
	title: string;
	description?: string;
	align?: 'left' | 'center';
}

/**
 * 섹션 제목. 번호나 대문자 eyebrow를 달지 않는다 —
 * 순서가 정보가 아닌 자리에 붙는 `01 / ABOUT`은 위계가 아니라 비계다.
 * 위계는 제목 크기와 여백이 만든다.
 */
export const SectionTitle = ({ title, description, align = 'left' }: Props) => {
	return (
		<header
			className={
				align === 'center' ? 'mb-14 flex flex-col items-center gap-4 text-center' : 'mb-14 flex flex-col gap-4'
			}
		>
			<h2 className="font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.15] tracking-[-0.03em]">{title}</h2>
			{description ? <p className="measure text-lg/relaxed text-muted-foreground">{description}</p> : null}
		</header>
	);
};
