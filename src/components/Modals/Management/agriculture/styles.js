import styled from 'styled-components';
import { defaultTheme } from '../../../../theme';

const { colors, text } = defaultTheme;

export const WrapperInputText = styled.div`
	display: flex;
	align-items: baseline;

	& span {
		margin-left: 5px;
		color: ${colors.neutral6};
		font-size: ${text.size.medium};
	}
`;
