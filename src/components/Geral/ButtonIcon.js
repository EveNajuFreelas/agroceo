import React from 'react';
import { Button } from '@material-ui/core';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const ButtonIconAdd = ({ color, backgroundColor, text, marginBottom }) => {
	return (
		<Button
			variant='contained'
			startIcon={
				<AddCircleOutlineOutlinedIcon style={{ color: `${color}` }} />
			}
			style={{
				backgroundColor: `${backgroundColor}`,
				color: `${color}`,
				boxShadow: 'none',
				marginBottom: marginBottom ? 15 : 0,
				borderColor: `${color}`,
			}}
		>
			{text}
		</Button>
	);
};

export default ButtonIconAdd;
