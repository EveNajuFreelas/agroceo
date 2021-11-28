import styled from 'styled-components';
import { defaultTheme } from '../../../../../theme';

const { text, colors } = defaultTheme;

export const TitleTableRow = styled.tr`
	th {
		font-size: ${text.size.normal};

		font-weight: 700;
		padding-bottom: 10px;
		color: ${colors.neutralDark};
	}

	th:first-child {
		width: 35%;
		text-align: start;
	}

	th:nth-child(2),
	th:nth-child(3) {
		width: 20%;
		text-align: start;
	}

	th:nth-child(4) {
		width: 10%;
		text-align: start;
	}

	th:nth-child(5) {
		width: 5%;
		text-align: start;
	}
`;
export const ItemTableRow = styled.tr`
	td {
		padding-bottom: 10px;
		font-size: ${text.size.normal};
	}

	td:nth-child(2),
	td:nth-child(3) {
		color: ${colors.neutral6};
	}

	td:nth-child(5) {
		color: ${colors.auxiliar};
	}
`;
