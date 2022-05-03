<script type="ts">
	import { css } from '@emotion/css';

	const colStyle = css`
		flex-grow: 1;
		flex-basis: 300px;
	`;
</script>

<div class={colStyle}>
	<slot />
</div>
