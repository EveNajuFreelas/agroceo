import { Button, Radio } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { margin, colors, text } = defaultTheme;

export const TypeManagementButton = styled((props) => (
	<Button {...props} variant="outlined" />
))`
	&.MuiButton-root {
		width: 100%;
		margin: ${margin.md} 0;
		background: ${(props) =>
			props.isEntry
				? `rgba(119, 220, 242, 0.2)`
				: `rgba(235, 31, 68, 0.2)`};
		border: 1px solid
			${(props) =>
				props.isEntry ? `rgba(119, 220, 242)` : colors.auxiliar};
		color: ${(props) => (props.isEntry ? `#13ABCD` : colors.auxiliar)};
		text-transform: capitalize;
		font-weight: bold;
		font-size: ${text.size.medium};
	}

	&.MuiButton-root .MuiButton-label {
		justify-content: flex-start;
	}
`;

export const FuelTypeRadio = styled(Radio)`
	&.MuiRadio-root {
		align-items: center;
	}
`;
