import { createMuiTheme } from '@material-ui/core';
import { defaultTheme } from './';

const { colors } = defaultTheme;

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.primary,
			contrastText: '#fff',
		},
		error: {
			main: colors.error,
		},
	},
	props: {
		MuiRadio: {
			color: 'primary',
		},
		MuiCheckbox: {
			color: 'primary',
		},
	},
});

export default theme;
