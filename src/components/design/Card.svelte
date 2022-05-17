<script type="ts">
	import { css } from '@emotion/css';
	import { primary, card } from './config/color';

	export let flat = false;

	const cardStyle = css`
		border-radius: 10px;
		background-color: ${flat ? primary : card};
		color: white;
		padding: 0.5rem;
		box-shadow: ${!flat && '-10px 50px 100px -70px black;'};
	`;

	const cardTitleStyle = css`
		padding: 2rem;
		font-size: 20px;
		font-weight: 600;
		line-height: 1.4;
		color: ${flat ? '#202020' : 'white'};

		h2 {
			font-size: 20px;
			font-weight: 600;
			line-height: 1.4;
		}
	`;

	const cardBodyStyle = css`
		padding: 2rem;
		border-radius: 10px;
		color: smoke;
		background-color: ${card};
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
	`;

	const cardActionStyle = css`
		margin-top: 1.5rem;
	`;
</script>

<section class={cardStyle}>
	{#if $$slots.title}
		<div class={cardTitleStyle}>
			<slot name="title" />
		</div>
	{/if}
	<div class={cardBodyStyle}>
		<slot />

		{#if $$slots.action}
			<div class={cardActionStyle}>
				<slot name="action" />
			</div>
		{/if}
	</div>
</section>
