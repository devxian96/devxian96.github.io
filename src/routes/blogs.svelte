<script type="ts">
	import { css } from '@emotion/css';
	import { Containers, Breadcrumbs } from '../components/design';
</script>

<svelte:head>
	<title>블로그</title>
</svelte:head>

<Containers>
	<Breadcrumbs>
		블로그
		<span slot="summary">안녕하세요.</span>
	</Breadcrumbs>

	<div>블로그</div>
</Containers>
