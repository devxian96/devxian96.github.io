<script type="ts">
	import { css } from '@emotion/css';
	import SideBar from './SideBar.svelte';
	import 'remixicon/fonts/remixicon.css'

	const containersStyle = css`
		display: flex;
		height: 100vh;
	`;

	const mainStyle = css`
		overflow: auto;
		max-width: 1400px;
		width: 100%;
		margin: auto;
		margin-top: 0;
		margin-bottom: 0;
		padding: 3rem;
	`;
</script>

<div class={containersStyle}>
	<SideBar />
	<main class={mainStyle}>
		<slot />
	</main>
</div>

<style global>
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
	}
	body {
		font-family: 'Noto Sans KR', sans-serif;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol,
	ul {
		list-style: none;
	}
	blockquote,
	q {
		quotes: none;
	}
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}

	body {
		background-color: rgb(30, 30, 35);
	}
</style>
