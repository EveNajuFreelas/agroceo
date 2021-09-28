import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { colors, text } = defaultTheme;

export const LabelContainer = styled.div`
	cursor: pointer;
	display: flex;
	color: ${colors.primary};
`;

export const LabelFilter = styled.span`
	font-size: ${text.size.large};
`;
