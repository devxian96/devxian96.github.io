<script type="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { css } from '@emotion/css';

	export let count = 10;
	export let color = 'white';
	let printCount = 0;

	const typograpyStyle = css`
		color: ${color};
		font-size: 2rem;
		font-weight: bold;
		padding-left: 6px;
		padding-right: 6px;
	`;

	onMount(() => {
		const interval = setInterval(() => {
			printCount += 1;
			if (printCount === count) {
				clearInterval(interval);
			}
		}, 100);
	});
</script>

<div class={typograpyStyle}>
	{printCount}
</div>
