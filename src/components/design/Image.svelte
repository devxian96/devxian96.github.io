<script type="ts">
	import { css } from '@emotion/css';

	export let width = '100%';
	export let height = 'auto';
	export let src: string;
	export let alt: string;

	const imageStyle = css`
		border-radius: 15px;
	`;
</script>

<img class={imageStyle} {src} {alt} {width} {height} />

// 레이지 로딩 구현
// 이미지 구현 이후 점점 증가하는 숫자 타이포 그래픽 에니메이션 만들기