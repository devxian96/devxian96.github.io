<script type="ts">
	import { css } from '@emotion/css';
	import { main, primary } from './config/color';
	import Row from './Row.svelte';

	const sidebarStyle = css`
		min-width: 250px;
		border-right: 3px solid rgba(34, 36, 42);
		color: white;
		position: relative;
	`;

	const sidebarLogoStyle = css`
		text-align: center;
		width: 100%;
		padding-top: 3rem;
		font-size: 28px;
		font-weight: 700;
		line-height: 1.3;

		img {
			padding-right: 15px;
		}
	`;

	const sidebarListStyle = css`
		padding: 2rem;

		div {
			color: snow;
			margin-bottom: 25px;
			font-size: small;
		}

		ol > li {
			padding: 18px 25px 18px 25px;
			border-radius: 10px;
		}

		ol > li.active {
			background-color: ${primary};
		}
	`;

	const sidebarLicense = css`
		width: 100%;
		text-align: center;
		bottom: 3rem;
		position: absolute;
	`;
</script>

<aside class={sidebarStyle}>
	<Row>
		<div class={sidebarLogoStyle}>
			<img src="/favicon.png" alt="logo" width="32px" height="32px" />Devxian
		</div>
	</Row>

	<div class={sidebarListStyle}>
		<div>메뉴</div>
		<ol>
			<li class="active">홈</li>
			<li>보유기술</li>
			<li>대표 프로젝트</li>
			<li>이력</li>
			<li>블로그</li>
		</ol>
	</div>

	<div class={sidebarListStyle}>
		<div>외부링크</div>
		<ol>
			<li>이메일</li>
			<li>깃허브</li>
		</ol>
	</div>

	<div class={sidebarLicense}>MIT License</div>
</aside>
