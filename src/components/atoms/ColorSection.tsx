import type { FC, ReactNode } from 'react';
import { Container } from '@mui/material';

interface Props {
	children: ReactNode;
	color: string;
}
export const ColorSection: FC<Props> = ({ children, color }) => {
	return (
		<Container
			disableGutters
			maxWidth={false}
			component="section"
			sx={{
				display: 'table',
				backgroundColor: color,
				color: 'white',
				height: '100vh',
				justifyContent: 'center',
				textAlign: 'center',
				'& > *': {
					display: 'table-cell',
					verticalAlign: 'middle',
				},
			}}
		>
			{children}
		</Container>
	);
};
