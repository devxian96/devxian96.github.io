<script type="ts">
	import { css } from '@emotion/css';

	export let className = '';
	export let width = '100%';

	const colStyle = css`
		max-width: ${width};
		flex-grow: 1;
		flex-basis: 300px;

		@media (max-width: 900px) {
			max-width: 100%;
		}
	`;
</script>

<div class="{colStyle}{' ' + className}">
	<slot />
</div>
