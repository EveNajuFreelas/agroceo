import { makeStyles } from '@material-ui/core/styles';
import { defaultTheme } from '../../../theme';

const { colors } = defaultTheme;

export const useStyles = makeStyles(theme => ({
	chip: {
		'margin': theme.spacing(0.5),
		'backgroundColor': `${colors.primary}`,
		'color': `${colors.neutral0}`,
		'fontSize': '16px',
		'&:hover': { backgroundColor: `${colors.primary}` },
	},
}));
