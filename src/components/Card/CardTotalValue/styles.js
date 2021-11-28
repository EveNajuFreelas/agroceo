import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { colors, text } = defaultTheme;

export const CardSummaryContainer = styled.div`
	display: flex;
	gap: 20px;

	padding: 15px;
	width: 428px;
	height: 90px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	align-items: center;
`;

export const FirstColumn = styled.div`
	color: #44cfee;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const TitleColumn = styled.div``;

export const IconFirstColumn = styled.img``;

export const SecondColumn = styled.div``;

export const ValueTotalCard = styled.div`
	font-size: 40px;
	font-weight: bold;
`;

export const DateTotalCard = styled.div`
	color: ${colors.neutral6};
	font-size: ${text.size.normal};
`;
