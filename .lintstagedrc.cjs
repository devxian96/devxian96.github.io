module.exports = {
	'*.{js,ts,json,svelte}': ['yarn format', 'yarn lint'],
	'./src/**/*.{svelte,ts}': ['yarn format', 'yarn lint'],
	'./.{ts,cjs,js}': ['yarn format', 'yarn lint']
};
