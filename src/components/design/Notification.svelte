<script type="ts">
	import { menu } from './../../stores/menu';
	import { card } from './config/color';
	import { css } from '@emotion/css';
	import clickOutside from '../../utils/clickOutside';

	let toggle = false;

	const notificationStyle = css`
		color: white;
		font-size: 100%;
		width: 45px;
		height: 45px;
		border: none;
		padding: 6px;
		background-color: rgb(40, 40, 45);
		border-radius: 50%;
		box-shadow: 1px 3px 12px 1px rgb(28, 28, 35);
		cursor: pointer;
		@media (max-width: 900px) {
			background-color: transparent;
			box-shadow: none;
			width: auto;
			height: auto;
			padding: 0;
			margin: 0;
		}
	`;

	const pcMenuStyle = css`
		display: none;
		color: white;
		font-size: 100%;
		width: 45px;
		height: 45px;
		background-color: transparent;
		border: none;
		cursor: pointer;
		float: left;
		@media (max-width: 900px) {
			display: initial;
			width: auto;
			height: auto;
			padding: 0;
			margin: 0;
		}
	`;

	// pc and mobile hybrid
	const notificationBoxStyle = css`
		position: relative;
		float: right;
		text-align: right;
		button > i {
			font-size: 28px;
		}

		@media (max-width: 900px) {
			width: 100%;
			border-bottom: 3px solid rgba(34, 36, 42);
			background-color: rgb(30, 30, 35);
			position: sticky;
			top: 0;
			padding-top: 12px;
			padding-bottom: 12px;
			margin-bottom: 20px;
			z-index: 10;
		}
	`;

	const notificiationListStyle = css`
		position: absolute;
		background-color: ${card};
		border-radius: 10px;
		padding: 12px;
		margin-top: 12px;
		right: 0;
		box-shadow: -10px 50px 100px -70px black;
	`;

	const toggleHandle = (): void => {
		toggle = !toggle;
	};

	const menuOn = (): void => {
		menu.update(() => true);
	};
</script>

<div class={notificationBoxStyle}>
	<button type="button" class={pcMenuStyle} on:click={menuOn} aria-label="메뉴">
		<i class="ri-menu-fill" />
	</button>

	<button type="button" class={notificationStyle} on:click={toggleHandle} aria-label="알림">
		<i class="ri-notification-line" />
	</button>

	{#if toggle}
		<div class={notificiationListStyle} use:clickOutside on:click_outside={toggleHandle}>
			Something...
		</div>
	{/if}
</div>
