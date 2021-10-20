import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme/index';

const { margin, text } = defaultTheme;

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
	font-family: ${text.fontFamily.bold};
`;
