export interface AssemblyBlock {
	/** 프레임 대비 % 좌표 */
	left: number;
	top: number;
	width: number;
	height: number;
	/** 스냅되어 들어오는 방향 (px) */
	fromX: number;
	fromY: number;
	/** 스냅 순서 */
	order: number;
	/** 블록 이름. 에디터에서 선택했을 때 뜨는 라벨이다. */
	label: string;
}

/**
 * 히어로 프레임 안에 띄우는 에디터 선택 영역.
 *
 * 좌표는 실제 AI 홈페이지 빌더 화면(`/images/works/homebuilder.jpg`)의 구획에 맞춰 잡았다.
 * 추상 와이어프레임이 아니라 실제 결과물 위에 얹히는 편집 UI다 —
 * "만드는 도구를 만든다"를 문장이 아니라 화면으로 보여주기 위한 장치.
 */
export const ASSEMBLY_BLOCKS: AssemblyBlock[] = [
	{ left: 2, top: 3, width: 96, height: 11, fromX: 0, fromY: -40, order: 0, label: '상단 메뉴' },
	{ left: 22, top: 18, width: 56, height: 19, fromX: -60, fromY: 0, order: 1, label: '헤드라인' },
	{ left: 39, top: 40, width: 22, height: 9, fromX: 0, fromY: 40, order: 2, label: '버튼' },
];
