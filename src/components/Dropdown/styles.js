import styled from 'styled-components'
import { defaultTheme } from '../../theme';

export const DropdownTextWrapper = styled.div`
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

export const DropdownButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
`;

export const DropdownWrapper = styled.div`
	width: 100%;
	transition: all 10s ease-out;
	background-color: 'white';
`;

export const DropdownTitleWrapper = styled.div`
	display: flex;
	align-items: ${defaultTheme.align.center};
	margin: ${defaultTheme.margin.md} ${defaultTheme.margin.sm};
	border-radius: ${defaultTheme.borderRadius.md};
	padding: ${defaultTheme.padding.lg};
	transition: width 0.4s ease - out;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	width: ${props => !props.showDrawer ? '40px' : '90%'};

`;

export const DropdownBodyContainer = styled.div`
 	margin-top: ${defaultTheme.margin.md};
`;

export const DropdownMenuBody = styled.div`
	display: flex;
	padding: 8px 0px;
	margin-top: 12px;
	align-items: center;
	&:hover{
		background-color: ${defaultTheme.colors.green2};
	}

	path {
		fill: white;
	}

`;

export const DropdownIconOptionWrapper = styled.div`
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

export const DropdownItemText = styled.span`
	font-size: ${defaultTheme.text.size.normal};
	font-family: ${defaultTheme.text.fontFamily.regular};
	font-weight: ${defaultTheme.text.fontFamily.bold};
	color: ${defaultTheme.colors.neutral0};
	border-radius: ${defaultTheme.borderRadius.md};
	margin-left: ${defaultTheme.margin.lg};
`;

export const DropRight = styled.div`
	display: block;
	left: 0;
	width: 220px;
	width: ${props => !props.isOpen ? '220px' : '80px'};
	transition: width 0.4s ease-out;
	height: 100%;
	padding:  ${defaultTheme.padding.sm} 0 ${defaultTheme.padding.sm} ${defaultTheme.padding.sm};
	border-radius: 0 ${defaultTheme.borderRadius.lg} ${defaultTheme.borderRadius.lg} 0;
	z-index: 12;
	background-color: red;
`;