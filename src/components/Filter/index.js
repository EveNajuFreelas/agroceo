import React, { useState, useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core/';

import { LabelFilter, LabelContainer } from './styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Filter = ({ label, itensMenu, clickFunction }) => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [labelSelected, setLabelSelected] = useState(label);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	useEffect(() => {
		handleClose();
		console.log(labelSelected);
		clickFunction(labelSelected);
	}, [labelSelected]);

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<LabelContainer>
				<LabelFilter onClick={handleClick}>{labelSelected}</LabelFilter>
				<KeyboardArrowDownIcon />
			</LabelContainer>
			<Menu
				id='simple-menu'
				anchorEl={anchorEl}
				keepMounted
				open={Boolean(anchorEl)}
				onClose={handleClose}
			>
				{itensMenu.map(item => (
					<MenuItem onClick={() => setLabelSelected(item)}>
						{item}
					</MenuItem>
				))}
			</Menu>
		</>
	);
};

export default Filter;
