<script type="ts">
	import { css } from '@emotion/css';

	const cardStyle = css`
		border-radius: 15px;
		background-color: rgb(36, 39, 49);
		color: white;
	`;

	const cardTitleStyle = css`
		padding: 24px 24px 0 24px;
		font-weight: bold;
	`;

	const cardBodyStyle = css`
		padding: 24px;
	`;

	const cardActionStyle = css`
		margin-top: 24px;
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
