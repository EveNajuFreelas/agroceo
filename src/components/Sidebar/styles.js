import styled from 'styled-components'
import { defaultTheme } from '../../theme';

export const SidebarDiv = styled.div`
	position: fixed;
	top: 0;
	width: ${props => !props.isOpen ? '220px' : '80px'};
	transition: width 0.4s ease-out;
	height: 100%;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.md} ${defaultTheme.borderRadius.md} 0;
	z-index: 11;
	background-color: ${defaultTheme.colors.green};
`;

export const ListItemWrapper = styled.div`
	display: flex;
	align-items: ${defaultTheme.align.center};
	margin: ${defaultTheme.margin.md} ${defaultTheme.margin.sm};
	border-radius: ${defaultTheme.borderRadius.md};
	padding:  ${defaultTheme.padding.lg};
    transition: width 0.4s ease-out;
	cursor: pointer;	
	background-color: ${defaultTheme.colors.green};
	&:hover{
		background-color: ${defaultTheme.colors.neutral3};
		margin-right: 0;
		border-radius: ${defaultTheme.borderRadius.lg} 0 0 ${defaultTheme.borderRadius.lg};
	}
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