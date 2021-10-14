import styled from 'styled-components';
import { TextField, Select, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { defaultTheme } from '../../theme';

const { margin, padding, colors, border, borderRadius } = defaultTheme;

export const InputFieldsWrapper = styled.div`
    display: flex;
    margin-bottom: ${margin.xg};
`;

export const InputField = styled(props => <TextField variant='outlined' {...props} />)`
    .MuiInputBase-root {
        margin-bottom: ${margin.lg};
    }
    
    .MuiOutlinedInput-root {
        min-width: 300px;
    }

    .MuiFormLabel-root.Mui-focused {
        color: ${colors.primary}
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${colors.primary}
    }
`;

export const SelectField = styled(props => (<div style={{ marginBottom: margin.lg }}><Select {...props} variant='outlined' IconComponent={ExpandMore} /></div>))`
    .MuiSelect-select {
        min-width: 254px;
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${colors.primary}
    }
`;

export const StyledMenuItem = styled(MenuItem)`
	& .MuiMenuItem-root.Mui-selected {
		color: ${colors.green};
		background-color: white;
	}
`;

export const UploadField = styled(props => <div {...props}>{props.writtenField}<UploadButton {...props}/></div>)`
    width: 300px;
    margin-top: ${margin.lg2};
`;

export const UploadButton = styled(props => (<label {...props}>
            <input onChange={props.onChange} id="file-upload" type="file" />
            {props.buttonName}
        </label>))`
    input[type='file'] {
        display: none;
    }

    border: ${border.input};
    border-radius: ${borderRadius.md};
    padding: ${padding.xg};

`;