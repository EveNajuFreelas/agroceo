import styled from 'styled-components';
import { defaultTheme } from '../../../../../theme';

const { text, colors } = defaultTheme;

export const TitleTableRowSupplies = styled.tr`
	th {
		font-size: ${text.size.normal};
		font-family: ${text.fontFamily.regular};
		font-weight: 700;
		padding-bottom: 10px;
		color: ${colors.neutralDark};
		text-align: start;
	}
`;
export const ItemTableRowSupplies = styled.tr`
	td {
		font-family: ${text.fontFamily.regular};
		padding-bottom: 10px;
		font-size: ${text.size.normal};
	}
`;
