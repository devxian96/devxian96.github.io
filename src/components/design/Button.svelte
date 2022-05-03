<script type="ts">
	import { css } from '@emotion/css';
	import { main } from './config/color';

	export let color = 'white';
	export let background = main;

	const buttonStyle = css`
		max-width: 100%;
		width: 100%;
		padding: 25px;
		border-radius: 15px;
		border: none;
		background-color: ${background};
		color: ${color};
	`;
</script>

<button class={buttonStyle} on:click>
	<slot />
</button>
