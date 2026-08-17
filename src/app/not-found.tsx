import Link from 'next/link';
import { Button } from '@/components/atoms/button';

const NotFound = () => {
	return (
		<main className="mx-auto flex max-w-3xl flex-col items-start gap-6 px-6 py-32">
			<span className="font-mono text-sm text-primary">$ cd .</span>
			<h1 className="font-mono text-5xl font-bold tracking-tighter">404</h1>
			<p className="text-muted-foreground">여긴 아직 안 만들었습니다.</p>
			<Button asChild>
				<Link href="/">돌아가기</Link>
			</Button>
		</main>
	);
};

export default NotFound;
