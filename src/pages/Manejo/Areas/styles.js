import { Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { colors } = defaultTheme;

export const TabStyled = styled(Tab)`
	&.MuiTab-root {
		border: 1px solid #ebebeb;
		border-radius: 10px 10px 0px 0px;
		font-size: 16px;
		text-transform: capitalize;
	}

	&.Mui-selected {
		color: ${colors.anotherGreen};
		border: 1px solid ${colors.anotherGreen};
		border-bottom: none;
	}
`;

export const TabsStyled = styled(Tabs)`
	&.MuiTabs-root .MuiTabs-indicator {
		display: none;
	}
`;

export const HeadSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const ButtonSection = styled.div`
	display: flex;
	gap: 20px;
	margin-bottom: 10px;
`;
