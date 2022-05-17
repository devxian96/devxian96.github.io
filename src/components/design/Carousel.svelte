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

	const navigatorStyle = css`
		display: flex;
		flex-direction: column;
		position: absolute;
		top: 0;
		right: 0;

		button {
			width: 12px;
			height: 12px;
			background-color: rgba(255, 255, 255, 0.2);
			border: none;
			border-radius: 50%;
			margin: 12px;
			cursor: pointer;
		}
		.active {
			background-color: white;
		}
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

	const goto = (go: number) => {
		if (page !== go) {
			page = go - 1;
			nextSlide();
		}
	};

	$: active = (index: number) => {
		if (page === index) {
			return 'active';
		} else if (page === 0 && index === max) {
			return 'active';
		}
		return;
	};

	onMount(() => {
		const interval = setInterval(() => {
			requestAnimationFrame(nextSlide);
		}, 12000);
		return () => clearInterval(interval);
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
