import { CircularProgress } from '@material-ui/core';
import { defaultTheme } from '../../theme';
import { ProgressContainer } from './styles';

const CircleLoading = () => {
	const { colors } = defaultTheme;

	return (
		<ProgressContainer>
			<CircularProgress style={{ color: colors.primary }} />
		</ProgressContainer>
	);
};

export default CircleLoading;
