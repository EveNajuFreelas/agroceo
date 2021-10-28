import styled from 'styled-components';
import { defaultTheme } from '../../../../../../theme';

const { text } = defaultTheme;

export const TitleRow = styled.tr`
	th {
		font-size: ${text.size.normal};
		font-family: ${text.fontFamily.regular};
		font-weight: 700;
		padding-bottom: 10px;
	}

	th:first-child {
		width: 82%;
		text-align: start;
	}

	th:first-child + th {
		width: 18%;
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
