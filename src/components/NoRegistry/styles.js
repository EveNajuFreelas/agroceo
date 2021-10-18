import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text, colors } = defaultTheme;

export const NoRegistryContainer = styled.div`
	display: flex;
	width: 100%;
	height: 10vh;
	justify-content: center;
	align-items: center;
`;

export const LabelRegistry = styled.span`
	font-size: ${text.size.h5};
	color: ${colors.neutralDark};
`;
