<script type="ts">
	import { menu } from '../../stores/menu';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { css } from '@emotion/css';
	import { primary } from './config/color';
	import Row from './Row.svelte';

	let isMenuOn = false;
	menu.subscribe((value: boolean): void => {
		isMenuOn = value;
	});

	$: sidebarStyle = css`
		min-width: 250px;
		border-right: 3px solid rgba(34, 36, 42);
		color: white;
		position: relative;
		background-color: rgb(30, 30, 35);

		@media (max-width: 900px) {
			min-width: 100vw;
			overflow-y: auto;
			overflow-x: hidden;
			top: 0;
			display: ${isMenuOn ? 'block' : 'none'};
			z-index: 100;
			position: fixed;
			border: none;
			height: 100%;
		}
	`;

	const sidebarLogoStyle = css`
		text-align: center;
		width: 100%;
		padding-top: 3rem;
		font-size: 28px;
		font-weight: 700;
		line-height: 1.3;
		cursor: pointer;

		img {
			padding-right: 15px;
		}

		@media (max-width: 900px) {
			pointer-events: none;
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
			cursor: pointer;

			a {
				color: white !important;
				text-decoration: none;
			}
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

		@media (max-width: 900px) {
			position: initial !important;
		}
	`;

	const sidebarLicenseStyle = css`
		width: 100%;
		text-align: center;
		bottom: 3rem;
		position: absolute;

		@media (max-width: 900px) {
			position: initial !important;
			padding-bottom: 3rem;
		}
	`;

	const closeButtonStyle = css`
		display: none;
		position: absolute;
		top: 0;
		left: 0;
		color: white;
		font-size: 100%;
		width: 28px;
		height: 28px;
		background-color: transparent;
		border: none;
		padding: 12px;
		cursor: pointer;

		i {
			font-size: 28px;
		}

		@media (max-width: 900px) {
			display: initial;
		}
	`;

	const active = (path: string): string => {
		if ($page.url.pathname === path) {
			return 'active';
		}
		return '';
	};

	const navigatorGoto = (path: string): void => {
		goto(path);
		if (isMenuOn) {
			window.document.body.style.overflow = 'auto';
			menu.update(() => false);
		}
	};

	const menuOff = (): void => {
		window.document.body.style.overflow = 'auto';
		menu.update(() => false);
	};
</script>

<aside class={sidebarStyle}>
	<div class={closeButtonStyle} on:click={menuOff}>
		<i class="ri-close-fill" />
	</div>
	<Row>
		<div class={sidebarLogoStyle} on:click={() => goto('/')}>
			<img src="/favicon.png" alt="logo" width="32px" height="32px" />Devxian
		</div>
	</Row>

	<div class={sidebarListStyle}>
		<div>메뉴</div>
		<ol>
			<li class={active('/')} on:click={() => navigatorGoto('/')}>
				<i class="ri-home-line" />홈
			</li>
			<li class={active('/skills')} on:click={() => navigatorGoto('/skills')}>
				<i class="ri-code-line" />보유기술
			</li>
			<li class={active('/projects')} on:click={() => navigatorGoto('/projects')}>
				<i class="ri-star-line" />대표 프로젝트
			</li>
			<li class={active('/history')} on:click={() => navigatorGoto('/history')}>
				<i class="ri-time-line" />이력
			</li>
			<li class={active('/blogs')} on:click={() => navigatorGoto('/blogs')}>
				<i class="ri-file-text-line" />블로그
			</li>
		</ol>
	</div>

	<div class={sidebarListStyle}>
		<div>외부링크</div>
		<ol>
			<li><i class="ri-mail-line" /><a href="mailto:coolman555@me.com">이메일</a></li>
			<li>
				<i class="ri-github-line" /><a href="https://github.com/devxian96" target="_blank">깃허브</a
				>
			</li>
		</ol>
	</div>

	<div class={sidebarLangStyle}>KOR | ENG</div>
	<div class={sidebarLicenseStyle}>MIT License</div>
</aside>
