<script type="ts">
	import { css } from '@emotion/css';
	import SideBar from './SideBar.svelte';
	import Notification from './Notification.svelte';
	import 'remixicon/fonts/remixicon.css';

	const containersStyle = css`
		display: flex;
		height: 100vh;
		background-color: rgb(30, 30, 35);
		font-family: 'Noto Sans KR', sans-serif;

		@media (max-width: 900px) {
			height: 100%;
		}
	`;

	const mainStyle = css`
		overflow-y: auto;
		width: 100%;
		margin-top: 0;
		margin-bottom: 0;

		@media (max-width: 900px) {
			overflow-y: initial;
			padding-left: 12px;
			padding-right: 12px;
			min-height: 100vh;
		}
	`;

	const contentsStyle = css`
		max-width: 1400px;
		width: 100%;
		padding: 3rem;
		margin: auto;

		@media (max-width: 900px) {
			padding: 0;
		}
	`;
</script>

<div class={containersStyle}>
	<SideBar />
	<main class={mainStyle}>
		<div class={contentsStyle}>
			<Notification />
			<slot />
		</div>
	</main>
</div>

<style global>
	@import 'reset-css';
	html {
		background-color: #ff3e00;
		color: white;
	}
</style>
