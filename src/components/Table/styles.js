import { TableContainer } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { colors, text } = defaultTheme;

export const StyledTableContainer = styled(TableContainer)`
	&.MuiTableContainer-root {
		border: 1px solid #ebebeb;
		border-radius: 0px 0px 10px 10px;
		width: 100%;
		margin-bottom: 5vh;
	}

	&.MuiTableContainer-root .MuiTableCell-body {
		font-size: ${text.size.medium};
		color: ${colors.neutral5};
	}

	&.MuiTableContainer-root .MuiTableRow-root {
		height: 68px;
	}

	&.MuiTableContainer-root
		.MuiTable-root
		.MuiTableHead-root
		.MuiTableRow-head
		.MuiTableCell-head {
		font-size: 14px;
		font-family: ${text.fontFamily.bold};
	}

	&.MuiTableContainer-root
		.MuiTable-root
		.MuiTableBody-root
		.MuiTableRow-root
		.MuiTableCell-root {
		font-size: 16px;
		font-family: ${text.fontFamily.regular};
	}
`;
