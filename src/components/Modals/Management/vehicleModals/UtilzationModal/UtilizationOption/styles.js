import styled from 'styled-components';
import { defaultTheme } from '../../../../../../theme';

const { colors, text } = defaultTheme;

export const TitleRow = styled.tr`
	th {
		font-size: ${text.size.normal};
		font-family: ${text.fontFamily.regular};
		font-weight: 700;
		padding-bottom: 10px;
	}

	th:first-child {
		width: 78%;
		text-align: start;
	}

	th:first-child + th {
		width: 22%;
		text-align: start;
	}
`;
export const ItemRow = styled.tr`
	td {
		font-family: ${text.fontFamily.regular};
		padding-bottom: 10px;
	}

	td:first-child,
	td:first-child + td {
		font-size: ${text.size.normal};
	}
`;

export const TitleTask = styled.span`
	color: ${colors.neutralDark};
	font-size: ${text.size.medium};
`;

export const StatusTask = styled.span`
	color: ${colors.neutralDark};
	font-size: ${text.size.normal};
	margin-left: 10px;
`;

export const WrapperItem = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;
