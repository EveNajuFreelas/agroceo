import { Drawer, ListItem } from '@material-ui/core';
import styled from 'styled-components'
import { defaultTheme } from '../../theme';
import { iconList } from '../../assets/Icons/icon-list';

const { borderRadius, colors, padding, width, text } = defaultTheme;

export const SidebarWrapper = styled(Drawer)`
	.MuiPaper-root {
		background-color: ${colors.green};
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
	justify-content: space-around;

	font-size: ${text.size.h5};
	font-weight: ${text.weight.semiBold};
	color: white;
`;

export const SidebarIcon = styled(iconList.menu)`

`;

export const SidebarListItem = styled.span`
	position: fixed;
	left: ${props => !props.isOpen ? '55px' : '-200%'};
	flex: 0;
	font-size: ${defaultTheme.text.size.medium};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
	opacity: ${props => !props.isOpen ? '1' : '0'};
`;

export const ListIconWrapper = styled.div`
	border-radius: ${defaultTheme.borderRadius.md};
`;

export const SidebarTitle = styled.span`
	display: block;
	top: 25px;
	font-size: ${defaultTheme.text.size.h5};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
	opacity: ${props => !props.isOpen ? '1' : '0'};
	position: fixed;
	left: ${props => !props.isOpen ? '55px' : '-200%'};
	flex: 0;
	cursor: default;
`;

export const DropRightDiv = styled.div`
	width: 400px;
	height: 100%;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.lg} ${defaultTheme.borderRadius.lg} 0;
	z-index: 12;
	background-color: red;
	opacity: 1;
`;

export const DropRightIconOptionWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: ${defaultTheme.align.flexEnd};

	path {
		fill: white;
	}

	&:hover{
		span{
			color:  ${defaultTheme.colors.primary};
		}
	}
`;