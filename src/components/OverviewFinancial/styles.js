import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { margin } = defaultTheme;

export const OverviewFinancialContainer = styled.div`
	width: 40%;
`;

export const CardTab = styled.div`
	display: flex;
	gap: 15px;
`;

export const CardList = styled.ul`
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;
	padding: 20px;
`;

export const FilterFinancial = styled.span`
	display: flex;
	align-items: center;
	gap: 25px;
	margin-bottom: ${margin.lg};
`;

export const FilterLabel = styled.span``;
