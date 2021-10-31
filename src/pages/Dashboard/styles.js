import styled from 'styled-components';

export const ContainerDashboard = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	margin: 0;
	padding: 0;
	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const ChartSection = styled.div`
	display: flex;
	flex-direction: row;
	gap: 20px;
	height: 100%;
	transition: width 0.4s ease-out;
	width: 60%;

	@media (max-width: 1720px) {
		flex-direction: column;
		//width: ${(props) => (props.drawerOpen ? `60%` : `60%`)};
		height: 100%;
	}
	@media (max-width: 1024px) {
		width: 100%;
	}
`;

export const OverviewFinancialContainer = styled.div`
	transition: width 0.4s ease-out;
	width: 30%;
	height: 100%;

	@media (max-width: 1720px) {
		width: ${(props) => (props.drawerOpen ? '30%' : '35%')};
		height: 100%;
	}

	@media (max-width: 1024px) {
		width: 100%;
	}
`;
