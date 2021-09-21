import styled from 'styled-components'
import { defaultTheme } from '../../theme';

export const SidebarDiv = styled.div`
	width: ${props => !props.isOpen ? '220px' : '80px'};
	transition: width 0.4s ease-out;
	height: 100%;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.lg} ${defaultTheme.borderRadius.lg} 0;
	z-index: 11;
	background-color: ${defaultTheme.colors.primary};
`;

export const ListItemWrapper = styled.div`
	display: flex;
	align-items: ${defaultTheme.align.center};
	margin: ${defaultTheme.margin.md} ${defaultTheme.margin.sm};
	border-radius: ${defaultTheme.borderRadius.md};
	padding:  ${defaultTheme.padding.lg};
    transition: width 0.4s ease-out;
	width: ${props => !props.isOpen ? '45	px' : '90 % '};
	cursor: pointer;	
	background-color: ${defaultTheme.colors.primary};
	&:hover{
		background-color: ${defaultTheme.colors.primaryVariant};
		margin-right: 0;
		border-radius: ${defaultTheme.borderRadius.lg} 0 0 ${defaultTheme.borderRadius.lg};
	}
`;

export const SidebarListItem = styled.span`
	position: fixed;
	left: ${props => !props.isOpen ? '5%' : '-200%'};
	flex: 0;
	font-size: ${defaultTheme.text.size.medium};
	font-family: ${defaultTheme.text.fontFamily.regular};
	font-weight: ${defaultTheme.text.fontFamily.bold};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
	opacity: ${props => !props.isOpen ? '1' : '0'};
`;

export const ListIconWrapper = styled.div`
	border-radius: ${defaultTheme.borderRadius.md};
`;

export const SidebarTitle = styled.span`
	font-size: ${defaultTheme.text.size.h5};
	font-family: ${defaultTheme.text.fontFamily.regular};
	font-weight: ${defaultTheme.text.fontFamily.bold};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
	opacity: ${props => !props.isOpen ? '1' : '0'};
	position: fixed;
	left: ${props => !props.isOpen ? '4%' : '-200%'};
	flex: 0;
`;
