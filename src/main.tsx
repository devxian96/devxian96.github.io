import React from 'react';
import { createRoot } from 'react-dom/client';

// Routers
import { Routers } from './routers';

createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Routers />
	</React.StrictMode>
);
