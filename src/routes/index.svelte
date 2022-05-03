<script type="ts">
	import { Containers, Card, Button, Row, Col } from '../components/design';
	let i: number = 10;
	const click = () => alert('hi');
</script>

<svelte:head>
	<title>홈</title>
</svelte:head>

<Containers>
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
				<Button slot="action" on:click={click}>hidd</Button>
			</Card>
		</Col>
	</Row>
</Containers>
d
