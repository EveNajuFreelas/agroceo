import { Breadcrumbs, Dialog } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { padding, colors, text, margin, width } = defaultTheme;

export const ModalWrapper = styled(Dialog)`
	.MuiDialog-paper {
		padding: ${padding.xg};
	}
	.MuiDialog-paperWidthSm {
		min-width: ${props => (props.isSmall ? '35%' : '45%')};
	}
`;

export const ModalHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: ${margin.xg};
`;

export const CloseModal = styled(Close)``;

export const HeaderTitle = styled.div`
	font-size: ${text.size.large};
	font-family: ${text.fontFamily.bold};
	margin-top: ${margin.sm};
`;

export const HeaderBreadcrumb = styled(Breadcrumbs)`
	li {
		color: ${colors.primary};
		font-size: ${text.size.small};
	}
`;

export const ModalFooter = styled.div`
	display: flex;
	gap: 20px;
	align-items: center;
	justify-content: center;
	margin-top: ${margin.xg};

	.MuiButton-label {
		font-family: ${text.fontFamily.bold};
		font-size: ${text.size.normal};
		text-transform: capitalize;
	}

	.MuiButton-containedPrimary {
		background-color: ${colors.primary};
		width: ${width.actionButtons};
		box-shadow: none;

		&:hover {
			background-color: ${colors.events.onHoverPrimaryButton};
		}
	}
`;
