<script type="ts">
	import { css } from '@emotion/css';
	import SideBar from './SideBar.svelte';
	import 'remixicon/fonts/remixicon.css';

	const containersStyle = css`
		display: flex;
		height: 100vh;
		background-color: rgb(30, 30, 35);
		font-family: 'Noto Sans KR', sans-serif;
	`;

	const mainStyle = css`
		overflow: auto;
		width: 100%;
		margin-top: 0;
		margin-bottom: 0;
	`;

	const contentsStyle = css`
		max-width: 1400px;
		width: 100%;
		padding: 3rem;
		margin: auto;

		@media (max-width: 500px) {
			padding: 0;
		}
	`;
</script>

<div class={containersStyle}>
	<SideBar />
	<main class={mainStyle}>
		<div class={contentsStyle}>
			<slot />
		</div>
	</main>
</div>

<style global>
	@import 'reset-css';
</style>
