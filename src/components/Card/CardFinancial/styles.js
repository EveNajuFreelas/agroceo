import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { text, colors } = defaultTheme;

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px;

	width: 30%;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
`;

export const ValueCard = styled.span`
	font-family: 'Inter-bold';
	font-size: ${text.size.large};
	color: ${colors.neutralDark};
`;

export const MonthCard = styled.span`
	font-size: ${text.size.normal};
	color: ${colors.neutral6};
	margin-bottom: 24px;
`;

export const IconCard = styled.img`
	width: 44px;
`;

export const DescriptionCard = styled.div`
	font-size: ${text.size.medium};
	color: ${colors.neutralDark};
`;
