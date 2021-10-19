import styled from 'styled-components';
import { TextField, Select, MenuItem, Slider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';
import { Icon } from '../../assets/Icons/index';

const { margin, padding, colors, border, borderRadius, text } = defaultTheme;

const CustomComponents = {
    SelectComponent: (props => 
        (<div style={{ marginBottom: margin.lg }}>
            <Select {...props} variant='outlined' IconComponent={ExpandMore} />
        </div>)),
    UploadComponent: (props => 
        (<div className={props.className}>
            <p className="label">{props.docName || props.label}</p>
            <UploadButton onChange={props.onChange} buttonName={props.buttonName}/>
        </div>)),
    UploadButtonComponent: (props => 
        (<label className={props.className}>
            <Icon name={iconList.iconUpload} size={15} />
            <input onChange={props.onChange} id="file-upload" type="file" />
            <p>{props.buttonName}</p>
        </label>)),
}

export const InputFieldsWrapper = styled.div`
    display: flex;
    margin: 0 ${margin.xg};
`;

export const InputField = styled(props => <TextField variant='outlined' InputLabelProps={{ shrink: true }}  {...props} />)`
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

export const SelectField = styled(CustomComponents.SelectComponent)`
    .MuiSelect-select {
        min-width: ${props => props.isFinancialModal ? '254px' : '300px'};
    }
    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: ${colors.primary}
    }
`;

export const StyledMenuItem = styled(MenuItem)`
	& .MuiMenuItem-root.Mui-selected {
		color: ${colors.primary};
		background-color: white;
	}
`;

export const UploadField = styled(CustomComponents.UploadComponent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    border: ${border.input};
    border-radius: ${borderRadius.md};

    .label {
        padding: 0 ${padding.lg};
        color: ${colors.neutral4};
    }
`;

export const UploadButton = styled(CustomComponents.UploadButtonComponent)`
    input[type='file'] {
        display: none;
    }

    p {
        margin-left: ${margin.sm};
    }

    display: flex;
    justify-content: center;
    align-items: center;
    border-left: ${border.input};
    padding: ${padding.lg};
    color: white;
    background-color: ${colors.primary};
    text-transform: uppercase;
    font-size: ${text.size.medium};
`;

export const StyledSlider = styled(Slider)`
    margin: 0 ${padding.md};
    color: ${colors.primary};
`;

export const ControlledInput = styled(props => <TextField {...props} variant='outlined' />)`

`;