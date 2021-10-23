import styled from 'styled-components';
import {
	TextField,
	Select,
	MenuItem,
	Slider,
	InputLabel,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';
import { Icon } from '../../assets/Icons/index';

const { margin, padding, colors, border, borderRadius, text } = defaultTheme;

const CustomComponents = {
	SelectComponent: props => (
		<div style={{ marginBottom: margin.lg }}>
			<Select
				{...props}
				variant='outlined'
				IconComponent={ExpandMore}
				margin='dense'
			/>
		</div>
	),
	UploadComponent: props => (
		<div className={props.className} style={{ width: '100%' }}>
			<p className='label'>{props.docName || props.label}</p>
			<UploadButton
				onChange={props.onChange}
				buttonName={props.buttonName}
			/>
		</div>
	),
	UploadButtonComponent: props => (
		<label className={props.className}>
			<Icon name={iconList.iconUpload} size={15} />
			<input onChange={props.onChange} id='file-upload' type='file' />
			<p>{props.buttonName}</p>
		</label>
	),
};

export const InputFieldsWrapper = styled.div`
	display: flex;
	margin: 0;
	justify-content: space-between;
`;

export const InputLabelStyled = styled(InputLabel)`
	&.MuiInputLabel-root {
		font-size: ${text.size.normal};
		margin-bottom: ${margin.sm};
	}
`;

export const InputField = styled(props => (
	<TextField
		variant='outlined'
		InputLabelProps={{ shrink: true }}
		{...props}
	/>
))`
	.MuiInputBase-root {
		margin-bottom: ${margin.lg};
	}

	.MuiOutlinedInput-root {
		height: 40px;
	}

	&.MuiFormControl-root {
		width: 100%;
	}

	.MuiFormLabel-root.Mui-focused {
		color: ${colors.primary};
	}

	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${colors.primary};
	}
`;

export const SelectField = styled(CustomComponents.SelectComponent)`
	&.MuiOutlinedInput-root {
		min-width: 100%;
	}
	.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
		border-color: ${colors.primary};
	}
`;

export const StyledMenuItem = styled(MenuItem)`
	/* & .MuiMenuItem-root.Mui-selected {
		color: ${colors.primary};
		background-color: white;
	} */
`;

export const UploadField = styled(CustomComponents.UploadComponent)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 300px;
	height: 35px;
	border: ${border.input};
	border-radius: ${borderRadius.md};
	margin-bottom: ${margin.lg};

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
		margin-left: ${margin.lg};
		font-size: ${text.size.small};

		font-family: ${text.fontFamily.bold};
	}

	display: flex;
	justify-content: center;
	align-items: center;
	border-left: ${border.input};
	height: 100%;
	width: 35%;
	color: white;
	border-radius: 0 ${borderRadius.sm} ${borderRadius.sm} 0;
	background-color: ${colors.primary};
	text-transform: uppercase;
`;

export const StyledSlider = styled(Slider)`
	&.MuiSlider-root {
		margin: 0 ${padding.md};
		color: ${colors.primary};
		width: 90%;
	}
`;

export const ControlledInput = styled(props => (
	<TextField {...props} variant='outlined' />
))`
	.MuiOutlinedInput-root {
		height: 40px;
	}
`;
