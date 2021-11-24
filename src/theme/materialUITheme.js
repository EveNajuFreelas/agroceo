import { createMuiTheme } from '@material-ui/core';
import { defaultTheme } from './';

const { colors } = defaultTheme;

const theme = createMuiTheme({
	palette: {
		primary: {
			main: colors.primary,
			contrastText: '#fff',
		},
	},
});

export default theme;
