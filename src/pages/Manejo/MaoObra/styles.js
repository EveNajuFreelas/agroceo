import { Tab, Tabs } from '@material-ui/core';
import styled from 'styled-components';
import { defaultTheme } from '../../../theme';

const { colors } = defaultTheme;

export const TabStyled = styled(Tab)`
	&.MuiTab-root {
		border: 1px solid #ebebeb;
		border-radius: 10px 10px 0px 0px;
	}

	&.Mui-selected {
		color: ${colors.anotherGreen};
		border: 1px solid ${colors.anotherGreen};
	}
`;

export const TabsStyled = styled(Tabs)`
	&.MuiTabs-root .MuiTabs-indicator {
		display: none;
	}
`;
