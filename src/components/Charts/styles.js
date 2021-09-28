import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text, colors } = defaultTheme;

export const ChartContainer = styled.div`
	display: 'flex';
	flex-direction: 'row';
`;

export const TitleSection = styled.span`
	display: flex;
	gap: 30px;
	font-size: ${text.size.large};
	color: ${colors.neutralDark};
`;

export const PaperChart = styled.div`
	padding: 20px;
	width: 528px;
	height: 400px;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	margin-top: 25px;
`;
