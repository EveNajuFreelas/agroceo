import styled from 'styled-components'
import { defaultTheme } from '../../theme';


export const SidebarDropRightDiv = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: ${props => !props.isHovering ? '800px' : '90px'};
	transition: width 0.4s ease-out;
	height: 100%;
    margin: 0;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.lg} ${defaultTheme.borderRadius.lg} 0;
	z-index: 10;
	background-color: ${defaultTheme.colors.secondaryAccent};
`;

export const SidebarDropRightSectionTitle = styled.span`
`;

export const SidebarDropRightSectionParts = styled.span`
`;

export const SidebarDropRightSectionBody = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
`;