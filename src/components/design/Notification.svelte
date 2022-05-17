<script type="ts">
	import { card } from './config/color';
	import { css } from '@emotion/css';
	import clickOutside from '../../utils/clickOutside';

	let toggle = false;

	const notificationStyle = css`
		color: white;
		font-size: 100%;
		width: 45px;
		height: 45px;
		background-color: transparent;
		border: none;
		padding: 6px;
		background-color: rgb(40, 40, 45);
		border-radius: 50%;
		box-shadow: 1px 3px 12px 1px rgb(28, 28, 35);
		cursor: pointer;
	`;

	const notificationBoxStyle = css`
		position: relative;
		float: right;
		text-align: right;
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

	const toggleHandle = () => {
		toggle = !toggle;
	};
</script>

<div class={notificationBoxStyle}>
	<button type="button" class={notificationStyle} on:click={toggleHandle} aria-label="알림">
		<i class="ri-notification-line" />
	</button>

	{#if toggle}
		<div class={notificiationListStyle} use:clickOutside on:click_outside={toggleHandle}>
			Something...
		</div>
	{/if}
</div>
