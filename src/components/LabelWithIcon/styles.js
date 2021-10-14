import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text } = defaultTheme;

export const ItemDescription = styled.div`
	display: flex;
	gap: 15px;
	align-items: center;
	//width: 200px;
	justify-content: ${props => (props.justifyEnd ? 'end' : 'start')};
`;
export const IconItemDescription = styled.img`
	width: 25px;
	height: 25px;
`;

export const TitleItem = styled.span`
	font-size: ${text.size.medium};

	&:first-letter {
		text-transform: capitalize;
	}
`;
