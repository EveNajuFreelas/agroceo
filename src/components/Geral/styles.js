import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text, colors } = defaultTheme;

export const TitleSection = styled.span`
	display: flex;
	gap: 30px;
	font-size: ${text.size.large};
	color: ${colors.neutralDark};
	margin-bottom: 20px;
`;
