import styled from 'styled-components';
import { defaultTheme } from '../../../../../theme';

const { text, colors } = defaultTheme;

export const TitleTableRowWeighing = styled.tr`
	th {
		font-size: ${text.size.normal};

		font-weight: 700;
		padding-bottom: 10px;
		color: ${colors.neutralDark};
	}

	th:first-child {
		width: 25%;
		text-align: start;
	}

	th:nth-child(2),
	th:nth-child(3) {
		text-align: start;
	}

	th:nth-child(4),
	th:nth-child(5),
	th:nth-child(6) {
		text-align: end;
	}
`;
export const ItemTableRowWeighing = styled.tr`
	td {
		padding-bottom: 10px;
		font-size: ${text.size.normal};
	}

	td:nth-child(2),
	td:nth-child(3) {
		text-align: start;
	}

	td:nth-child(4),
	td:nth-child(5),
	td:nth-child(6) {
		text-align: end;
	}
`;
