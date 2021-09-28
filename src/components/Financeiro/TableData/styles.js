import { TableContainer } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { colors, text } = defaultTheme;

export const StyledTableContainer = styled(TableContainer)`
	&.MuiTableContainer-root {
		border: 1px solid #ebebeb;
		border-radius: 10px 10px 0px 0px;
		width: 100%;
	}

	&.MuiTableContainer-root .MuiTableCell-body {
		font-size: ${text.size.medium};
		color: ${colors.neutral5};
	}

	&.MuiTableContainer-root .MuiTableRow-root {
		height: 68px;
	}
`;
