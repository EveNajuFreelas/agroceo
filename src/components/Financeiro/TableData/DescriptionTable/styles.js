import styled from 'styled-components';
import { defaultTheme } from '../../../../theme';

const { text } = defaultTheme;

export const ItemDescription = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1fr 2fr;
	padding: 15px;
	width: 251px;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	align-items: center;
`;
export const IconItemDescription = styled.img`
	width: 15px;
`;

export const TitleItem = styled.span`
	font-size: ${text.size.large};
	font-family: ${text.fontFamily.bold};
`;
