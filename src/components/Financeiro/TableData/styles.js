import styled from 'styled-components';
import { DataGrid } from '@mui/x-data-grid';
import { defaultTheme } from '../../../theme';

const { colors, text } = defaultTheme;

export const StyledDataGrid = styled(DataGrid)`
	&.MuiDataGrid-root .MuiDataGrid-columnSeparator {
		display: none;
	}

	&.MuiDataGrid-root .MuiDataGrid-columnHeaderWrapper {
		font-size: ${text.size.small};
		font-family: ${text.fontFamily.bold};
	}
`;
