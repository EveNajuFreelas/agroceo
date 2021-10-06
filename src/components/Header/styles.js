import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { Select, MenuItem } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const { align, text, border, margin, colors, padding, borderRadius, width } =
	defaultTheme;

export const HeaderStyle = styled.div`
	display: flex;
	position: fixed;
	justify-content: ${align.spaceBetween};
	align-items: ${align.center};
	right: 0;

	height: 4em;
	background-color: #fff;
	border-bottom: ${border.header};
	z-index: 10;

	${props =>
		props.drawerOpen
			? `width: calc(100% - ${width.sidebarOpen})`
			: `width: calc(100% - ${width.sidebarClosed})`};
`;

export const HeaderTitle = styled.p`
	font-size: ${text.size.h5};
	font-weight: ${text.weight.bold};
	margin: 0;
`;

export const HeaderDate = styled.p`
	margin: 0;
	size: ${text.size.caption};
	color: ${colors.neutral6};
`;

export const HeaderInfo = styled.div`
	margin: 0 ${margin.lg};
`;

export const StyledSelect = styled(props => (
	<Select {...props} IconComponent={ExpandMore} />
))`
	border: ${border.header};
	padding: ${padding.sm} ${padding.md};
	border-radius: ${borderRadius.md};
	margin-right: ${margin.xg};

	&.MuiInputBase-root {
		color: ${colors.green};
	}

	& .MuiSelect-icon {
		color: ${colors.green};
	}

	&.MuiInput-underline:before {
		border-bottom: none;
	}

	&.MuiInput-underline:hover:not(.Mui-disabled):before {
		border-bottom: none;
	}
`;

export const StyledMenuItem = styled(MenuItem)`
	& .MuiMenuItem-root.Mui-selected {
		color: ${colors.green};
		background-color: white;
	}
`;

export const MenuToggleButton = styled.div`
	height: 1.5em;
	width: 2em;
	display: flex;
	align-items: ${defaultTheme.align.center};
	border-radius: ${defaultTheme.borderRadius.md};
	padding: ${defaultTheme.padding.sm};
	margin: 1.2em ${defaultTheme.margin.lg};
	cursor: pointer;

	&:hover {
		background-color: ${defaultTheme.colors.greyLight};
		opacity: 0.8;
	}
	&:active {
		opacity: 0.9;
	}
`;
