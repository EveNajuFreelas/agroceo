import { useState } from 'react';
import { createContainer, useContainer } from 'unstated-next';

const PageContextContainer = () => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [pageTitle, setPageTitle] = useState('greeting');
	const [breadcrumbs, setBreadcrumbs] = useState();

	const changeDrawerState = () => setDrawerOpen(current => !current);

	return {
		drawerOpen,
		pageTitle,
		changeDrawerState,
		setPageTitle,
		breadcrumbs,
		setBreadcrumbs,
	};
};

export const PageContainer = createContainer(PageContextContainer);

export const usePageContext = () => useContainer(PageContainer);
