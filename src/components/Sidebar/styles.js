import { Drawer, ListItem } from '@material-ui/core';
import styled from 'styled-components'
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';
import { ChevronRight } from '@material-ui/icons';

const { borderRadius, colors, padding, width, text, margin, border } = defaultTheme;

export const SidebarWrapper = styled(Drawer)`
	.MuiPaper-root {
		background-color: ${colors.primary};
		padding: ${padding.sm};
		padding-right: 0;
		width: ${(props) => props.isOpen ? width.sidebarOpen : width.sidebarClosed};
	}

	.MuiDrawer-paperAnchorDockedLeft {
		border: none;
		border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
	}
`;

export const ListItemWrapper = styled(ListItem)`
	cursor: pointer; 
	
	.MuiListItem-gutters {
		padding:  ${padding.lg};
	}

	&:hover{
		background-color: ${colors.events.onHover};
		border-radius: ${borderRadius.lg} 0 0 ${borderRadius.lg};
	} 
`;

export const SidebarHeader = styled.div`
	display: flex;
	align-items: center;

	font-size: ${text.size.h5};
	font-weight: ${text.weight.semiBold};
	color: white;
	margin: ${margin.lg};
`;

export const SidebarIcon = styled(iconList.menu)`
	margin-right: ${margin.lg};
	border-radius: ${borderRadius.md};
	border: ${border.menu};
	color: white;
	padding: ${padding.sm};
`;

export const ListExpandButton = styled(ChevronRight)`
	color: white;
`;
