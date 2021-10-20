import styled from 'styled-components';
import { defaultTheme } from '../../theme';

const { text, colors } = defaultTheme;

export const TitleSection = styled.span`
	display: flex;
	gap: 20px;
	font-size: ${text.size.large};
	color: ${colors.neutralDark};
	margin-bottom: 12px;

	@media (max-width: 1025px) {
		font-size: ${text.size.medium};
	}
`;
