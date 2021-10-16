import styled from 'styled-components';
import { defaultTheme } from '../../../theme';
import { TextField } from '@material-ui/core';

const { colors } = defaultTheme;

export const TableHeaderContainer = styled.div`
	padding: 15px;
	display: grid;
	grid-template-columns: 8% 37% 47% 8%;
	border: 1px solid #ebebeb;
	border-radius: 10px 10px 0px 0px;
	align-items: center;
	
	@media (max-width: 1445px){
		grid-template-columns: 15% 25% 48% 12%;
	}
	
	@media (max-width: 1025px){
		grid-template-columns: 15% 25% 45% 15%;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const ButtonIcon = styled.img`
	width: 20px;
	padding: 10px;
	cursor: pointer;
`;

export const ButtonWrapper = styled.button`
	width: 40px;
	height: 40px;
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid ${colors.primary};
	background-color: #fff;
	border-radius: 6px;
`;

export const SearchInput = styled(TextField)`
	&.MuiTextField-root {
		width: 45%;
		display: flex;
		color: green;
		
		@media (max-width: 1445px){
			margin: auto;
			width: 100%;	
		}
		
		@media (max-width: 1025px){
			margin: auto;
			width: 100%;	
		}
	}

	&.MuiTextField-root .MuiInputLabel-root {
		color: ${colors.neutral};
	}
`;

export const ContainerRight = styled.div`
	display: flex;
	justify-content: space-evenly;
	@media (max-width: 1025px){
		margin: auto;
		justify-content: center;
		width: 100%;	
	}
`;

export const ButtonRight = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const FilterContainer = styled.div`
	width: 75%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;