import styled from 'styled-components'
import { defaultTheme } from '../../theme';

export const SidebarDiv = styled.div`
	width: 220px;
	height: 100%;
	padding:  ${defaultTheme.padding.sm};
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
	width: ${props => !props.showDrawer ? '45	px' : '90 % '};
	cursor: pointer;	
	background-color: ${defaultTheme.colors.primary};
	&:hover{
		background-color: ${defaultTheme.colors.primaryVariant};
	}
`;

export const ListItemWrapperWithPop = styled.div`
	display: flex;
	align-items: ${defaultTheme.align.center};
	margin: ${defaultTheme.margin.md} ${defaultTheme.margin.sm};
	border-radius: ${defaultTheme.borderRadius.md};
	padding:  ${defaultTheme.padding.lg};
    transition: width 0.4s ease-out;
	width: ${props => !props.showDrawer ? '45	px' : '90 % '};
	cursor: pointer;	
	background-color: ${defaultTheme.colors.primary};
	&:hover{
		background-color: ${defaultTheme.colors.primaryVariant};
		width: 120%;
	}
`;

export const SidebarListItem = styled.span`
	font-size: ${defaultTheme.text.size.medium};
	font-family: ${defaultTheme.text.fontFamily.regular};
	font-weight: ${defaultTheme.text.fontFamily.bold};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
`;

export const ListIconWrapper = styled.div`
	border-radius: ${defaultTheme.borderRadius.md};
`;