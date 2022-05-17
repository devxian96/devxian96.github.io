<script type="ts">
	import { css } from '@emotion/css';
	import { goto } from '$app/navigation';
	import { primary, secondary } from './../components/design/config/color';
	import {
		Containers,
		Card,
		Button,
		Row,
		Col,
		Breadcrumbs,
		Image,
		Typograpy,
		Carousel
	} from '../components/design';

	const intoStyle = css`
		display: flex;
		width: 100%;
		color: white;
		font-size: 22px;
		font-weight: 300;
		line-height: 1.5;
	`;

	const iconStyle = css`
		font-size: 188px;
		text-align: center;
	`;

	const click = () => alert('hi');
</script>

<svelte:head>
	<title>홈</title>
</svelte:head>

<Containers>
	<Breadcrumbs>
		<i class="ri-home-line" /> 홈
		<span slot="summary">안녕하세요.</span>
	</Breadcrumbs>

	<Row>
		<Carousel height="600px">
			<Image src="/img/virus.webp" width="550px" height="600px" backgroundColor="#282c34">
				<h1>라이브러리</h1>
				<div>React에서도,<br />글로벌 컴포넌트</div>
				<small>한번의 선언으로<br />전체 소스코드에서<br />바로사용</small>
				<a href="https://github.com/devxian96/react-global-components" target="_blank"
					><Button>저장소로 이동하기</Button></a
				>
			</Image>
			<Image src="/img/phpExpressLogo.webp" width="550px" height="600px" backgroundColor="#333" lazy>
				<h1>프레임워크</h1>
				<div>Express를 php에서</div>
				<small>같은 개발 경험<br />설명이 필요 없는<br />직관적인 코드</small>
				<a href="https://github.com/devxian96/phpExpress" target="_blank"
					><Button>저장소로 이동하기</Button></a
				>
			</Image>
			<Image src="/img/neomo.webp" width="550px" height="600px" backgroundColor={secondary} lazy>
				<h1>프레임워크</h1>
				<div>뉴모피즘 디자인</div>
				<small>UI 트랜드<br />플랫 디자인의 대안<br />미래적인 느낌</small>
				<a href="https://github.com/neomorphism/neomo" target="_blank"
					><Button>저장소로 이동하기</Button></a
				>
			</Image>
		</Carousel>
	</Row>

	<Row>
		<Col>
			<Card flat>
				<h2 slot="title">장석현 [Full-Stack]</h2>
				<div class={intoStyle}>
					개발 공부를 시작한지<Typograpy count={new Date().getFullYear() - 2011} />년 되었고,
				</div>
				<div class={intoStyle}>
					공식 경력으로는<Typograpy color={primary} count={new Date().getFullYear() - 2020} />년
					차에요.
				</div>

				<Image src="/img/mypic.webp" width="100%" height="100%" />

				한림대학교 빅데이터학과<br />
				여주대학교 컴퓨터 정보과
			</Card>
		</Col>

		<Col>
			<Card>
				<h2 slot="title">목표</h2>
				<div class={iconStyle}>
					<i class="ri-pushpin-line" />
				</div>
				React, Vue, Angluar, Svelte, Solidjs<br />
				같은 Front-End 프레임워크를<br />
				개발해 보고 싶어요.<br /><br />
				많은 사람들이 제가 개발한<br />
				라이브러리나 프레임워크, 제품을<br />
				사용하여 좋은 경험을 했으면 좋겠어요.
			</Card>
		</Col>

		<Col>
			<Card>
				<h2 slot="title">관심사</h2>
				<div class={iconStyle}>
					<i class="ri-heart-2-line" />
				</div>
				새로운 기술을 학습하는 것을 좋아해요.<br />
				최근에는 Solidjs에 관심이 있어요.<br /><br />
				서비스 운영과 이슈 처리를 하며 얻는<br />
				경험을 공유하고 배우기도 해요.<br />
				기획자, 디자이너, 마케터와 대화하고<br />
				새로운 시각을 알아가는 것도 좋아해요.
			</Card>
		</Col>
	</Row>

	<Row>
		<Col>
			<Card>
				<h2 slot="title">보유기술</h2>
				어떤 멋진 기술을 가지고 있는지 소개 할게요.
				<Button slot="action" on:click={() => goto('/skills')}>자세히 보기</Button>
			</Card>
		</Col>
		<Col>
			<Card>
				<h2 slot="title">포트폴리오</h2>
				이 사이트를 어떻게 만들었는지 함께 볼까요?
				<Button slot="action" color="#202020" background={primary} on:click={click}>네, 좋아요</Button>
			</Card>
		</Col>
	</Row>
</Containers>
