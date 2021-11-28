import styled from 'styled-components';
import {
	TextField,
	Select,
	MenuItem,
	Slider,
	InputLabel,
	FormControl,
	TextareaAutosize,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';
import { Icon } from '../../assets/Icons/index';

const { margin, padding, colors, border, borderRadius, text } = defaultTheme;

const CustomComponents = {
	SelectComponent: (props) => (
		<div style={{ marginBottom: margin.lg }}>
			<Select
				{...props}
				variant="outlined"
				IconComponent={ExpandMore}
				margin="dense"
				displayEmpty
			/>
		</div>
	),

	UploadComponent: (props) => (
		<div className={props.className} style={{ width: '99.5%' }}>
			<p
				className="label"
				style={{
					textOverflow: 'ellipsis',
					whiteSpace: 'nowrap',
					overflow: 'hidden',
					width: '55%',
				}}
			>
				{props.docName || props.label}
			</p>
			<UploadButton
				onChange={props.onChange}
				buttonName={props.buttonName}
				name={props.name}
				helperText={props.helperText}
				accept={props.accept}
			/>
		</div>
	),
	UploadButtonComponent: (props) => (
		<label className={props.className}>
			<Icon name={iconList.iconUpload} size={15} />
			<input
				onChange={props.onChange}
				id="file-upload"
				type="file"
				name={props.name}
				accept={props.accept}
				placeholder="Enviar arquivo"
			/>
			<p>{props.buttonName}</p>
		</label>
	),
	UploadPhotoButtonComponent: (props) => (
		<label className={props.className} htmlFor="picture-upload">
			<img src={props.img || iconList.add_a_photo} />
			<input
				type="file"
				id="picture-upload"
				accept="image/*"
				onChange={props.onChange}
			/>
		</label>
	),
	AddPictureComponent: (props) => (
		<label className={props.className}>
			<AddPictureButton onChange={props.onChange} img={props.img} />
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
		font-size: ${text.size.small};
		margin-bottom: ${margin.md};
		color: ${colors.neutral5};
	}

	&.MuiInputLabel-root .MuiInputLabel-asterisk {
		color: ${colors.auxiliar};
	}
`;

export const InputLabelRadio = styled((props) => <span {...props}></span>)`
	font-size: ${text.size.normal};
	margin-bottom: ${margin.md};
	color: ${colors.neutral5};

	${(props) =>
		props.required &&
		`&:after {
			content: ' *';
			color: ${colors.auxiliar}
		}`}
`;

export const InputField = styled((props) => (
	<TextField
		variant="outlined"
		InputLabelProps={{ shrink: true }}
		{...props}
	/>
))`
	.MuiInputBase-root {
		margin-bottom: ${(props) => (props.helperText ? 0 : margin.lg2)};
	}

	.MuiOutlinedInput-root {
		height: 40px;
	}

	&.MuiFormControl-root {
		width: 100%;
	}

	.MuiFormHelperText-root {
		margin-bottom: 12px;
		margin-left: 0;
		color: ${colors.neutral6};

		font-size: ${text.size.caption};
	}
`;

export const TextArea = styled((props) => (
	<TextareaAutosize {...props} rowsMin={5} />
))`
	width: 90%;
	padding: 10px;
	border: 1px solid ${colors.neutral3};
	border-radius: 5px;
	margin-bottom: 20px;

	textarea:focus {
		border: 1px solid ${colors.primary};
	}
`;

export const FormControlStyled = styled(FormControl)`
	.MuiFormGroup-row {
		margin-bottom: ${margin.xg};
	}
`;

export const SelectField = styled(CustomComponents.SelectComponent)`
	&.MuiOutlinedInput-root {
		width: 100%;
		margin-bottom: ${margin.md};
	}

	.MuiSelect-selectMenu {
		max-height: 1.2rem;
		align-items: center;
	}

	&.MuiOutlinedInput-root .MuiSelect-root .MuiListItemText-root {
		margin: 0;
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
	width: 100%;
	height: 35px;
	border: ${border.input};
	border-radius: ${borderRadius.md};
	margin-bottom: ${margin.xg};

	.label {
		padding: 0 ${padding.lg};
	}
`;

export const UploadButton = styled(CustomComponents.UploadButtonComponent)`
	input[type='file'] {
		display: none;
	}

	p {
		margin-left: ${margin.lg};
		font-size: ${text.size.small};

		font-weight: bold;
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
	cursor: pointer;
`;

export const StyledSlider = styled(Slider)`
	&.MuiSlider-root {
		margin: 0 ${padding.md};
		color: ${colors.primary};
		width: 90%;
	}
`;

export const ControlledInput = styled((props) => (
	<TextField {...props} variant="outlined" />
))`
	.MuiOutlinedInput-root {
		height: 40px;
	}
`;

export const AddPictureButton = styled(
	CustomComponents.UploadPhotoButtonComponent
)`
	cursor: pointer;

	input[type='file'] {
		cursor: pointer;
		display: none;
	}

	img {
		width: 180px;
		height: 180px;
		border-radius: 100px;
	}
`;

export const AddPictureSection = styled(CustomComponents.AddPictureComponent)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: ${margin.sm};
`;
