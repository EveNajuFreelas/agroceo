import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { text } = defaultTheme;

export const CardValueContainer = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1fr 2fr;
	padding: 15px;
	width: 251px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	align-items: center;
`;

export const IconCardValue = styled.img`
	width: 18px;
`;

export const ValueCard = styled.span`
	font-size: ${text.size.large};
	font-weight: bold;
`;

export const TextCard = styled.span`
	color: ${(props) => props.colorText};
	font-size: ${text.size.caption};
`;
