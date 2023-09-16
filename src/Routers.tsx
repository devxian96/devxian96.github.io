import type { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages
import { Home } from './pages/Home';
import { Skill } from './pages/Skill';

export const Routers: FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/skill" element={<Skill />} />
			</Routes>
		</BrowserRouter>
	);
};
