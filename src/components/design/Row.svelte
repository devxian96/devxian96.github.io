<script type="ts">
	import { css } from '@emotion/css';

	const rowStyle = css`
		display: flex;
		flex-wrap: wrap;
		gap: 1em;
		width: 100%;
	`;
</script>

<div class={rowStyle}>
	<slot />
</div>
