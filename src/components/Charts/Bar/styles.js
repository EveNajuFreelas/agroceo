import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { text } = defaultTheme;

const BarContainer = styled.div`
	width: 528px;
	height: 340px;
`;

const LegendBarContanier = styled.div`
	display: flex;
	margin-bottom: 27px;
	gap: 40px;
`;

const LegendBarItem = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

const LegendBarPoint = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 20px;
`;

const LegendBarLabel = styled.span`
	font-size: ${text.size.caption};
`;

export {
	BarContainer,
	LegendBarContanier,
	LegendBarItem,
	LegendBarPoint,
	LegendBarLabel,
};
