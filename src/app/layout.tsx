import { Recoil } from '@/app/Recoil';
import { Container, CssBaseline } from '@mui/material';
import { DrawerAppBar } from '@/components/molecules/DrawerAppBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ko">
			<body>
				<CssBaseline />
				<Recoil>
					<DrawerAppBar />
					<Container disableGutters maxWidth={false} component="main">
						{children}
					</Container>
				</Recoil>
			</body>
		</html>
	);
}
