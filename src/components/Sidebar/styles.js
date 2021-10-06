import { Drawer, List, ListItem } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';
import { ChevronRight } from '@material-ui/icons';

const { borderRadius, colors, padding, width, text, margin, border } =
	defaultTheme;

export const SidebarWrapper = styled(Drawer)`
	.MuiPaper-root {
		transition: width 0.4s ease;
		background-color: ${colors.primary};
		padding: ${padding.sm};
		padding-right: 0;
		width: ${props =>
			props.isOpen ? width.sidebarOpen : width.sidebarClosed};
	}

	.MuiDrawer-paperAnchorDockedLeft {
		border: none;
		border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
	}
`;

export const ListWrapper = styled(List)`
	margin-top: ${margin.exg};
`;

export const ListItemWrapper = styled(ListItem)`
	cursor: pointer;

	.MuiListItem-gutters {
		padding: ${props => (props.isSubSidebar ? 0 : padding.lg)};
	}

	&:hover {
		background-color: ${props =>
			props.isSubSidebar
				? colors.events.onHoverSubmenu
				: colors.events.onHover};
		border-radius: ${borderRadius.lg} 0 0 ${borderRadius.lg};
	}
`;

export const SidebarHeader = styled.div`
	display: flex;
	align-items: center;

	font-size: ${text.size.h5};
	font-weight: ${text.weight.semiBold};
	color: white;
	margin: ${padding.lg};
`;

export const SubSidebarHeader = styled.div`
	font-size: ${text.size.large};
	font-weight: ${text.weight.bold};
	margin: ${margin.lg} auto;
	padding: ${padding.lg};
`;

export const SidebarIcon = styled(iconList.iconMenu)`
	cursor: pointer;
	display: flex;
	flex-shrink: 0;
	margin-right: ${margin.lg};
	border-radius: ${borderRadius.md};
	border: ${border.menu};
	color: white;
	padding: ${padding.sm};
`;

export const ListExpandButton = styled(ChevronRight)`
	color: white;
`;

export const ListItemName = styled.div`
	width: 80%;
	padding-left: ${padding.md};
	color: ${props => (props.isSubSidebar ? colors.darkerGreen : 'white')};
`;

export const SubSidebar = styled(Drawer)`
	.MuiPaper-root {
		margin-left: ${props =>
			props.isOpen ? width.sidebarOpen : width.sidebarClosed};
		padding-right: 0;
		padding-left: ${padding.lg};
		width: ${width.subSidebar};
		z-index: 1100;
	}

	.MuiDrawer-paperAnchorDockedLeft {
		border: none;
		border-radius: 0 ${borderRadius.md} ${borderRadius.md} 0;
	}
`;
