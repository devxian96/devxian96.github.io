<script type="ts">
	import { primary } from './config/color';
	import { onMount } from 'svelte';
	import { css } from '@emotion/css';
	import Row from './Row.svelte';

	export let height = '400px';

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
		background-color: ${primary};

		@media (max-width: 900px) {
			width: 100%;
			transform: translate(0, 0);
		}
	`;

	const carouselStyle = css`
		display: -webkit-inline-box;
		width: 100%;
		position: absolute;
		top: 0;
	`;

	const navigatorStyle = css`
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;

		button {
			width: 30px;
			height: 10px;
			background-color: rgba(255, 255, 255, 0.2);
			border: none;
			border-radius: 10px;
			margin: 12px;
			cursor: pointer;
		}
		.active {
			background-color: white;
		}
	`;

	let page = 1;
	let max = 3;
	let left = 0;

	$: style = `left: -${left}%`;

	let nextSlideInterval: ReturnType<typeof setInterval>;
	const nextSlide = async (): Promise<void> => {
		nextSlideInterval = setInterval(() => {
			if (left < (page - 1) * 100) {
				left += 1;
			} else if (left > (page - 1) * 100) {
				left -= 1;
			} else {
				clearInterval(nextSlideInterval);
			}
		}, 5);
	};

	const goto = (go: number): void => {
		if (page !== go) {
			page = go;
			clearInterval(loopInterval);
			clearInterval(nextSlideInterval);
			loopEvent();
			nextSlide();
		}
	};

	$: active = (index: number): string | undefined => {
		if (page === index) {
			return 'active';
		}
		return undefined;
	};

	let loopInterval: ReturnType<typeof setInterval>;
	const loopEvent = (): void => {
		loopInterval = setInterval(() => {
			if (page === max) {
				page = 1;
			} else {
				page += 1;
			}
			requestAnimationFrame(nextSlide);
		}, 12000);
	};

	onMount(() => {
		loopEvent();
		return () => clearInterval(loopInterval);
	});
</script>

<Row className={rowStyle}>
	<div class={carouselStyle} {style}>
		<slot />
	</div>
	<div class={navigatorStyle}>
		{#each new Array(max) as _, index}
			<button
				class={active(index + 1)}
				type="button"
				aria-label="{index + 1} 슬라이드"
				on:click={() => goto(index + 1)}
			/>
		{/each}
	</div>
	<div class={decoStyle} />
</Row>
