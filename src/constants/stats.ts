export interface Stat {
	value: string;
	label: string;
}

/**
 * 셀 수 있는 것만 적는다. 사용자 수·다운로드 수처럼 검증할 수 없는 숫자는 쓰지 않는다.
 * 앞의 둘은 이력서 기준, 마지막은 공개 저장소 기준이다.
 */
export const STATS: Stat[] = [
	{ value: '6년 11개월', label: '개발 경력' },
	{ value: '4년 11개월', label: '카페24 재직' },
	{ value: '6종', label: '직접 만들어 공개한 도구' },
];
