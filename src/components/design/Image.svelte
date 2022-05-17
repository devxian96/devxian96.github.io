<script type="ts">
	import { css } from '@emotion/css';
	import { primary } from './config/color';
	import { Col } from './index';

	export let width = '100%';
	export let height = 'auto';
	export let src: string;
	export let alt = '';
	export let lazy = false;
	export let backgroundColor = primary;
	export let className = '';

	const imageStyle = css`
		border-radius: 10px;
		margin: auto;
	`;

	const bannerStyle = css`
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		height: ${height};
		border-radius: 10px;
		background-color: ${backgroundColor};
	`;

	const bannerSummaryStyle = css`
		padding: 2rem;
		display: flex;
		flex-direction: column;
		height: calc(${height} - 4rem);
		justify-content: center;
		color: white;
		gap: 1rem;

		h1 {
			font-size: 28px;
			font-weight: 700;
			line-height: 1.3;
			margin-bottom: 30px;
			color: ${primary};
		}

		div {
			font-size: 50px;
			font-weight: 700;
			line-height: 1.4;
		}

		small {
			font-size: 22px;
			font-weight: 300;
			line-height: 1.5;
			color: smoke;
		}
	`;

	const bannerImageStyle = css`
		text-align: center;
	`;
</script>

<div class="{bannerStyle}{' ' + className}">
	{#if $$slots.default}
		<Col width="40%">
			<div class={bannerSummaryStyle}>
				<slot />
			</div>
		</Col>
	{/if}
	<Col className={bannerImageStyle}>
		<img class={imageStyle} loading={lazy ? 'lazy' : 'auto'} {src} {alt} {width} {height} />
	</Col>
</div>
