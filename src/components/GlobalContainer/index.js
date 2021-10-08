import { Container } from '@material-ui/core';
import React, { Fragment } from 'react';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { usePageContext } from '../../context/pageContext';
import { defaultTheme } from '../../theme';

export const GlobalContainer = ({ children }) => {
	const { drawerOpen } = usePageContext();
	const padding = drawerOpen
		? defaultTheme.width.globalWidthOpen
		: defaultTheme.width.globalWidthClosed;

	return (
		<Fragment>
			<Sidebar />
			<Header />
			<Container
				style={{ paddingTop: 80, maxWidth: '100%', paddingLeft: padding }}
			>
				{children}
			</Container>
		</Fragment>
	);
};
