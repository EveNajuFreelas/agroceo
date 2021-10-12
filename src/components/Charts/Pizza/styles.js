import styled from 'styled-components';
import { defaultTheme } from '../../../theme';
const { padding, text } = defaultTheme;

export const PizzaContainer = styled.div`
	width: 340px;
	height: 340px;
	display: flex;
	gap: 30px;
`;

export const LegendPizzaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

export const LegendPizzaItem = styled.div`
	padding: ${padding.lg};
	height: 20px;
	width: fit-content;
	text-align: center;
	color: #fff;
	border-radius: 20px;
`;

export const LegendPizzaLabel = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: center;
`;

export const LegendName = styled.span`
	font-size: ${text.size.caption};
`;
export const LegendPercent = styled.span`
	font-size: ${text.size.medium};
`;
