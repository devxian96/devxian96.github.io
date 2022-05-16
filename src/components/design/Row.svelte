<script type="ts">
	import { css } from '@emotion/css';

	export let className = '';

	const rowStyle = css`
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
		width: 100%;
		padding-bottom: 3rem;
	`;
</script>

<div class="{rowStyle}{' ' + className}">
	<slot />
</div>
