<script type="ts">
	import { onMount } from 'svelte';
	import { css } from '@emotion/css';
	import Row from './Row.svelte';

	export let height = '400px';

	let page = 1;
	let max = 3;
	let left = 0;

	const rowStyle = css`
		position: relative;
		overflow: hidden;
		height: calc(${height} + 20px);
		padding: 0;
		border-radius: 10px;
	`;

	const decoStyle = css`
		position: absolute;
		bottom: 0px;
		border-radius: 0 0 10px 10px;
		transform: translate(2%, 0);
		width: 96%;
		height: 20px;
		background-color: tomato;
	`;

	const carouselStyle = css`
		display: -webkit-inline-box;
		width: 100%;
		position: absolute;
		top: 0;
	`;

	$: style = `left: -${left}%`;

	const nextSlide = async () => {
		const interval = setInterval(() => {
			if (left < page * 100) {
				left += 1;
			} else if (left > page * 100) {
				left -= 1;
			} else if (page >= max - 1) {
				page = 0;
				clearInterval(interval);
			} else {
				page += 1;
				clearInterval(interval);
			}
		}, 5);
	};

	onMount(() => {
		const interval = setInterval(() => {
			requestAnimationFrame(nextSlide);
		}, 7000);
		return () => clearInterval(interval);
	});
</script>

<Row className={rowStyle}>
	<div class={carouselStyle} {style}>
		<slot />
	</div>
	<div class={decoStyle} />
</Row>
