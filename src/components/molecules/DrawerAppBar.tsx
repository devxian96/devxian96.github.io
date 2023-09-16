'use client';
import { type FC, useState } from 'react';
import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Typography,
	Button,
	Toolbar,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

interface Props {
	window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['소개', '보유기술', '이력', '블로그'];

export const DrawerAppBar: FC<Props> = ({ window }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen((prevState) => !prevState);
	};

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<>
			<AppBar component="nav" color="transparent" position="fixed" elevation={0} enableColorOnDark>
				<Toolbar variant="dense">
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ color: 'white', mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h5"
						component="div"
						sx={{ color: 'white', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
					>
						SeokHyun Jang
					</Typography>
					<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
						{navItems.map((item) => (
							<Button key={item} sx={{ color: '#fff' }}>
								{item}
							</Button>
						))}
					</Box>
				</Toolbar>
			</AppBar>
			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
					}}
				>
					<Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
						<Typography variant="h5" sx={{ my: 2 }}>
							SeokHyun Jang
						</Typography>
						<Divider />
						<List>
							{navItems.map((item) => (
								<ListItem key={item} disablePadding>
									<ListItemButton sx={{ textAlign: 'center' }}>
										<ListItemText primary={item} />
									</ListItemButton>
								</ListItem>
							))}
						</List>
					</Box>
				</Drawer>
			</nav>
		</>
	);
};
