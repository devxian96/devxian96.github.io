<script type="ts">
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

	const click = () => alert('hi');
</script>

<svelte:head>
	<title>홈</title>
</svelte:head>

<Containers>
	<Breadcrumbs>
		Home
		<span slot="summary">안녕하세요.</span>
	</Breadcrumbs>
	<Row>
		<Typograpy count={11} />
		<Typograpy color={primary} count={1} />
		<Image src="/img/phpExpressLogo.webp" width="550px" height="600px" backgroundColor={'#333'}>
			<h1>프레임워크</h1>
			<div>Express를 php에서</div>
			<small>같은 개발 경험<br />설명이 필요 없는<br />직관적인 코드</small>
			<Button on:click={click}>버튼</Button>
		</Image>
		<Carousel height="400px">
			<Image
				src="/img/phpExpressLogo.webp"
				width="410px"
				height="400px"
				backgroundColor={secondary}
			>
				<h1>제목</h1>
				<div>내용</div>
				<Button on:click={click}>버튼</Button>
			</Image>
			<Image
				src="/img/phpExpressLogo.webp"
				width="410px"
				height="400px"
				backgroundColor={secondary}
			>
				<h1>제목</h1>
				<div>내용</div>
				<Button on:click={click}>버튼</Button>
			</Image>
			<Image
				src="/img/phpExpressLogo.webp"
				width="410px"
				height="400px"
				backgroundColor={secondary}
			>
				<h1>제목</h1>
				<div>내용</div>
				<Button on:click={click}>버튼</Button>
			</Image>
		</Carousel>
	</Row>

	<Row>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				행복한 하루를 보낼려면 어떻게 해야 할까요?
				<Button slot="action" on:click={click}>네, 좋아요</Button>
			</Card>
		</Col>
		<Col>
			<Card flat>
				<h5 slot="title">제목</h5>
				행복한 하루를 보낼려면 어떻게 해야 할까요?
				<Button slot="action" on:click={click}>네, 좋아요</Button>
			</Card>
		</Col>
	</Row>

	<Row>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				행복한 하루를 보낼려면 어떻게 해야 할까요?
				<Button slot="action" on:click={click}>네, 좋아요</Button>
			</Card>
		</Col>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				행복한 하루를 보낼려면 어떻게 해야 할까요?
				<Button slot="action" background={primary} on:click={click}>네, 좋아요</Button>
			</Card>
		</Col>
	</Row>
</Containers>
