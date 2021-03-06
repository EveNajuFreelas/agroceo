import styled from 'styled-components';

export const ChartContainer = styled.div`
	display: 'flex';
	width: 100%;
	flex-direction: 'row';
`;

export const PaperChart = styled.div`
	padding: 20px;
	width: 528px;
	height: 400px;
	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.09);
	border-radius: 16px;

	@media (max-width: 1024px){
		width: ${props => props.drawerOpen ? `92%` : `95%`};
	}
`;
