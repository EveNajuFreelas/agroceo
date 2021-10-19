import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const PageContextContainer = () => {
	const [drawerOpen, setDrawerOpen] = useState(true);

	const changeDrawerState = () => setDrawerOpen(current => !current);

	return {
		drawerOpen,
		changeDrawerState,
	};
};

export const PageContainer = createContainer(PageContextContainer);

export const usePageContext = () => useContainer(PageContainer);
