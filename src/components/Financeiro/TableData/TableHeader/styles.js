import styled from 'styled-components';
import { defaultTheme } from '../../../../theme';
import { TextField } from '@material-ui/core';

const { colors } = defaultTheme;

export const TableHeaderContainer = styled.div`
	padding: 15px;
	display: grid;
	grid-template-columns: 10% 50% 40%;
	border-bottom: 1px solid #ebebeb;
`;
export const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
`;

export const ButtonIcon = styled.img`
	width: 20px;
	padding: 10px;
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
		width: 50%;
		display: flex;
	}
`;
export const ContainerRight = styled.div`
	display: flex;
	justify-content: space-between;
`;
