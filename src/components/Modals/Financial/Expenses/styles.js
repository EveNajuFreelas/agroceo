import { TextField, Select, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import styled from 'styled-components';
import { defaultTheme } from '../../../../theme';

const { margin, colors } = defaultTheme;

export const InputFieldsWrapper = styled.div`
    display: flex;
    margin-bottom: ${margin.xg};
`;

export const PropertyDivisionWrapper = styled.div`

`;

export const InputField = styled(props => <TextField variant='outlined' {...props} />)`
    .MuiInputBase-root {
        margin-bottom: ${margin.lg};
    }
    
    .MuiOutlinedInput-root {
        min-width: 90%;
    }
`;

export const SelectField = styled(props => (<Select {...props} variant='outlined' IconComponent={ExpandMore} />))`
    .MuiOutlinedInput-root {
        min-width: 90%;
    }
`;

export const StyledMenuItem = styled(MenuItem)`
	& .MuiMenuItem-root.Mui-selected {
		color: ${colors.green};
		background-color: white;
	}
`;