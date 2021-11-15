import React from 'react';
import { Button } from '@material-ui/core';
import { defaultTheme } from '../../../theme';
import { Print } from '@material-ui/icons';

const ButtonReports = ({ t, ...props }) => {
	const { colors } = defaultTheme;

	return (
		<Button
			{...props}
			variant="contained"
			startIcon={<Print style={{ color: `${colors.neutral0}` }} />}
			style={{
				backgroundColor: `${colors.primary}`,
				color: `${colors.neutral0}`,
				boxShadow: 'none',
				marginBottom: 15,
				border: `1px solid ${colors.primary}`,
				textTransform: 'capitalize',
				fontWeight: 700,
			}}
		>
			{t('reports')}
		</Button>
	);
};

export default ButtonReports;
