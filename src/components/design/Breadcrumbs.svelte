<script type="ts">
	import { primary } from './config/color';
	import { css } from '@emotion/css';

	const breadcrumbsStyle = css`
		padding-bottom: 3rem;
	`;

	const breadcrumbsTitleStyle = css`
		color: ${primary};
		font-size: 28px;
		font-weight: 700;
		line-height: 1.3;
	`;

	const breadcrumbsSummaryStyle = css`
		color: white;
		font-size: 50px;
		font-weight: 700;
		line-height: 1.3;
	`;
</script>

<div class={breadcrumbsStyle}>
	<div class={breadcrumbsTitleStyle}>
		<slot />
	</div>
	{#if $$slots.summary}
		<div class={breadcrumbsSummaryStyle}>
			<slot name="summary" />
		</div>
	{/if}
</div>
