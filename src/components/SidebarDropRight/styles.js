import styled from 'styled-components'
import { defaultTheme } from '../../theme';


export const SidebarDropRightDiv = styled.div`
    position: fixed;
	display: flex;
    left: 0; 
    top: 0;
    width: ${props => !props.isHovering ? '380px' : '5px'};
	transition: width 0.4s ease-out;
	height: 100%;
    margin: 0;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.lg} ${defaultTheme.borderRadius.lg} 0;
	z-index: 10;
	background-color: ${defaultTheme.colors.secondaryAccent};
	justify-content: flex-End;
`;

export const SidebarDropRightSubDiv = styled.div`
    display: flex;
	width: 130px;
	height: 100%;
	margin-right: ${defaultTheme.margin.lg};
`;

export const SidebarDropRightSectionTitle = styled.span`
	font-size: ${defaultTheme.text.size.large};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
`;

export const SidebarDropRightSectionParts = styled.span`
	font-size: ${defaultTheme.text.size.normal};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-top: ${defaultTheme.margin.lg};
`;

export const SidebarDropRightSectionBody = styled.div`
    display: flex;
	padding: 8px 0;
	align-items: flex-start;
	flex-direction: column;
`;