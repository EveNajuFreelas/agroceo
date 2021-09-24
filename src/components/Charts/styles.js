import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text, colors } = defaultTheme;

const ChartSection = styled.div`
	display: 'flex';
	flex-direction: 'row';
`;

const TitleSection = styled.span`
	font-size: ${text.size.large};
	color: ${colors.neutralDark};
`;

const PaperChart = styled.div`
	padding: 20px;
	width: 528px;
	height: 400px;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	margin-top: 25px;
`;

export { ChartSection, TitleSection, PaperChart };
