import styled from 'styled-components';
import { defaultTheme } from '../../../../theme';

const { text } = defaultTheme;

export const ItemDescription = styled.div`
	display: grid;
	grid-template-columns: 0.5fr 1fr 2fr;
	width: 251px;

	border-radius: 16px;
	align-items: center;
`;
export const IconItemDescription = styled.img`
	width: 25px;
`;

export const TitleItem = styled.span`
	font-size: ${text.size.medium};

	&:first-letter {
		text-transform: capitalize;
	}
`;
