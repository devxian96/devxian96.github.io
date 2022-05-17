<script type="ts">
	import { css } from '@emotion/css';
	import { primary } from './config/color';
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

		ol > li > i {
			padding-right: 10px;
		}
	`;

	const sidebarLangStyle = css`
		width: 100%;
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
		text-align: center;
		bottom: 5rem;
		position: absolute;
	`;

	const sidebarLicenseStyle = css`
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
			<li class="active">
				<i class="ri-home-line" />홈
			</li>
			<li><i class="ri-code-line" />보유기술</li>
			<li><i class="ri-star-line" />대표 프로젝트</li>
			<li><i class="ri-time-line" />이력</li>
			<li><i class="ri-file-text-line" />블로그</li>
		</ol>
	</div>

	<div class={sidebarListStyle}>
		<div>외부링크</div>
		<ol>
			<li><i class="ri-mail-line" />이메일</li>
			<li><i class="ri-github-line" />깃허브</li>
		</ol>
	</div>

	<div class={sidebarLangStyle}>KOR | ENG</div>
	<div class={sidebarLicenseStyle}>MIT License</div>
</aside>
