<script>
	import { css } from '@emotion/css';

	const button = css`
		padding: 30px;
	`;
</script>

<button class={button}>
	<slot />
</button>
