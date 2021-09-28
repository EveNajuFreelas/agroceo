import { Container, Drawer } from '@material-ui/core';
import React, { useState, Fragment } from 'react';
// import { DrawerMenu } from "../../components/DrawerMenu";
import { Header } from '../../components/Header';
// import clsx from 'clsx';
import { useStyles } from './styles';
// import { SetProperty } from '../SetProperty'
// import { usePropertyContext } from "../../context/properties";

export const GlobalContainer = ({ children }) => {
	const [showDrawer, setShowDrawer] = useState(false);
	// const { propertySelected } = usePropertyContext();
	const classes = useStyles();

	const toggleDrawer = () => setShowDrawer(state => !state);

	return (
		<Fragment>
			{/* {!propertySelected && <SetProperty />} */}
			{/*<Drawer
        style={{ boxShadow: '0px 0px 12px 0px rgba(0,0,0,0.5)' }}
        anchor={'left'}
        open={showDrawer}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: showDrawer,
          [classes.drawerClose]: !showDrawer,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: showDrawer,
            [classes.drawerClose]: !showDrawer,
          }),
        }}
        onClose={toggleDrawer}>
        <DrawerMenu
          showDrawer={showDrawer}
          toggleDrawer={toggleDrawer}
        />
      </Drawer> */}
			<Header />
			<Container style={{ paddingTop: 80, maxWidth: '95%' }}>
				{children}
			</Container>
		</Fragment>
	);
};
