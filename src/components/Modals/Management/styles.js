import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { text, colors } = defaultTheme;

export const TitleList = styled.span`
	font-size: ${text.size.normal};
	font-weight: bold;
	color: ${colors.neutralDark};
`;

export const ListItems = styled.ul`
	list-style-type: none;

	& li {
		font-size: ${text.size.medium};
		margin-top: 10px;
		color: ${colors.neutralDark};
	}
`;
