import { Container } from '@material-ui/core';
import { Fragment } from 'react';
import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { usePageContext } from '../../context/pageContext';
import { defaultTheme } from '../../theme';

export const GlobalContainer = ({ children }) => {
	const { drawerOpen } = usePageContext();
	const width = drawerOpen
		? `calc(100% - ${defaultTheme.width.sidebarOpen})`
		: `calc(100% - ${defaultTheme.width.sidebarClosed})`;
	const marginLeft = drawerOpen
		? `${defaultTheme.width.sidebarOpen}`
		: `${defaultTheme.width.sidebarClosed}`;

	return (
		<Fragment>
			<Sidebar />
			<Header />
			<Container
				style={{
					paddingTop: 80,
					maxWidth: '100%',
					width: width,
					marginLeft: marginLeft,
					transition: 'all 0.4s ease-out',
				}}
			>
				{children}
			</Container>
		</Fragment>
	);
};
