import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { margin } = defaultTheme;

export const CardTab = styled.div`
	display: flex;
	gap: 5px;
`;

export const CardList = styled.ul`
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	padding: 20px;
	height: 100%;
`;

export const FilterFinancial = styled.span`
	display: flex;
	align-items: center;
	gap: 25px;
	margin-bottom: ${margin.lg};
	font-size: ${defaultTheme.text.size.large};

	@media (max-width: 1025px){
		font-size: ${defaultTheme.text.size.medium};
	}
`;

export const FilterLabel = styled.span`
	font-size: ${defaultTheme.text.size.large};
	color: ${defaultTheme.colors.neutralDark};

	@media (max-width: 1025px){
		font-size: ${defaultTheme.text.size.medium};
	}
`;
