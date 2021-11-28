import { Grid, Button } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme/index';

const { margin, text, colors, border } = defaultTheme;

export const PropertyDivisionWrapper = styled.div``;

export const PropertiesField = styled(Grid)`
	display: grid;
	grid-template-columns: 0fr 1fr 1.5fr 0.5fr 1fr;
	gap: 20px;

	margin-top: ${margin.xg};
	align-items: center;
	justify-content: space-evenly;
`;

export const Subtitle = styled.span`
	font-size: ${text.size.medium};
	font-weight: bold;
`;

export const ParcelButton = styled(Button)`
	&.MuiButton-root {
		width: 40%;
		border-radius: 40px;

		color: ${colors.auxiliar};
		border: ${border.payedButton};
	}

	&.MuiButton-root.Mui-disabled {
		background: ${colors.greenLight};
		color: ${colors.neutral0};
		border: none;
	}
`;
