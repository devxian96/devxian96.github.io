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

	let i = 10;
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
		<Image src="/img/phpExpressLogo.webp" width="410px" height="400px" backgroundColor={secondary}>
			<h1>제목</h1>
			<small>내용</small>
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
				<small>내용</small>
				<Button on:click={click}>버튼</Button>
			</Image>
			<Image
				src="/img/phpExpressLogo.webp"
				width="410px"
				height="400px"
				backgroundColor={secondary}
			>
				<h1>제목</h1>
				<small>내용</small>
				<Button on:click={click}>버튼</Button>
			</Image>
			<Image
				src="/img/phpExpressLogo.webp"
				width="410px"
				height="400px"
				backgroundColor={secondary}
			>
				<h1>제목</h1>
				<small>내용</small>
				<Button on:click={click}>버튼</Button>
			</Image>
		</Carousel>
	</Row>

	<Row>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				안녕{i}
				<Button slot="action" on:click={click}>hidd</Button>
			</Card>
		</Col>
		<Col>
			<Card flat>
				<h5 slot="title">제목</h5>
				안녕{i}
				<Button slot="action" on:click={click}>hidd</Button>
			</Card>
		</Col>
	</Row>

	<Row>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				안녕{i}
				<Button slot="action" on:click={click}>hidd</Button>
			</Card>
		</Col>
		<Col>
			<Card>
				<h5 slot="title">제목</h5>
				안녕{i}
				<Button slot="action" background={primary} on:click={click}>hidd</Button>
			</Card>
		</Col>
	</Row>
</Containers>
