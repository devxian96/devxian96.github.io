<script type="ts">
	import { css } from '@emotion/css';
	import { main } from './config/color';

	export let color = 'white';
	export let background = main;

	const buttonStyle = css`
		position: relative;
		max-width: 100%;
		width: 100%;
		padding: 25px;
		border-radius: 10px;
		border: none;
		background-color: ${background};
		color: ${color};
		font-size: 15px;
		font-weight: 600;
		line-height: 20px;
		&:hover {
			opacity: 0.85;
			cursor: pointer;
		}
	`;
</script>

<button class={buttonStyle} on:click>
	<slot />
</button>
