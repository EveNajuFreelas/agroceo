import styled from 'styled-components';
import { defaultTheme } from '../../../theme';
const { padding, text } = defaultTheme;

const PizzaContainer = styled.div`
	width: 340px;
	height: 340px;
	display: flex;
	gap: 30px;
`;

const LegendPizzaContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 5px;
`;

const LegendPizzaItem = styled.div`
	padding: ${padding.lg};
	height: 20px;
	width: 8vw;
	text-align: center;
	color: #fff;
	border-radius: 20px;
`;

const LegendPizzaLabel = styled.div`
	display: flex;
	gap: 5px;
	align-items: center;
	justify-content: center;
`;

const LegendName = styled.span`
	font-size: ${text.size.caption};
`;
const LegendPercent = styled.span`
	font-size: ${text.size.medium};
`;

export {
	PizzaContainer,
	LegendPizzaContainer,
	LegendPizzaItem,
	LegendPizzaLabel,
	LegendName,
	LegendPercent,
};
