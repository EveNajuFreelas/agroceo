import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { margin, colors, text, borderRadius } = defaultTheme;

export const TypeManagementButton = styled((props) => (
	<Button {...props} variant="outlined" />
))`
	&.MuiButton-root {
		width: 100%;
		margin: ${margin.md} 0;
		background: ${(props) =>
			props.isEntry
				? `rgba(119, 220, 242, 0.2)`
				: `rgba(235, 31, 68, 0.2)`};
		border: 1px solid
			${(props) =>
				props.isEntry ? `rgba(119, 220, 242)` : colors.auxiliar};
		color: ${(props) => (props.isEntry ? `#13ABCD` : colors.auxiliar)};
		text-transform: capitalize;
		font-weight: bold;
		font-size: ${text.size.medium};
	}

	&.MuiButton-root .MuiButton-label {
		justify-content: flex-start;
	}
`;

export const FuelTypeRadio = styled.input`
	display: none;

	&:checked + label {
		background: rgba(4, 241, 130, 0.15);
		color: ${colors.darkerGreen};
		border-color: ${colors.darkerGreen};

		& img {
			color: ${colors.darkerGreen};
			filter: brightness(0) saturate(100%) invert(31%) sepia(28%)
				saturate(1478%) hue-rotate(103deg) brightness(101%)
				contrast(98%);
		}
	}
`;

export const FuelLabelRadio = styled.label`
	width: 43%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	border: 1px solid ${colors.neutral};
	margin-right: ${margin.lg2};
	border-radius: ${borderRadius.lg};
	gap: ${margin.lg};
	color: ${colors.primary};
	font-size: ${text.size.medium};
`;
