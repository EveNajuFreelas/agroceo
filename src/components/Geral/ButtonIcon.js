import React from 'react';
import { Button } from '@material-ui/core';
import { defaultTheme } from '../../theme';

import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const ButtonIconAdd = ({
	color,
	backgroundColor,
	textButton,
	marginBottom,
	...props
}) => {
	const { colors } = defaultTheme;

	return (
		<Button
			{...props}
			variant='contained'
			startIcon={
				<AddCircleOutlineOutlinedIcon style={{ color: `${color}` }} />
			}
			style={{
				backgroundColor: `${backgroundColor}`,
				color: `${color}`,
				boxShadow: 'none',
				marginBottom: marginBottom ? 15 : 0,
				border: `1px solid ${colors.primary}`,
				textTransform: 'capitalize',
				fontWeight: 700,
			}}
		>
			{textButton}
		</Button>
	);
};

export default ButtonIconAdd;
