import { createMuiTheme } from '@material-ui/core';
import styled, { createGlobalStyle } from 'styled-components';
import { defaultTheme } from '../theme';
const { colors } = defaultTheme;
//import { createTheme } from '@material-ui/styles';

// export const theme = createMuiTheme({
// 	components: {
// 		Select: {
// 			variants: [
// 				{
// 					props: { variant: 'agro' },
// 					style: {
// 						border: `none`,
// 						colors: `${colors.primary}`,
// 					},
// 				},
// 			],
// 		},
// 	},
// });

export const MainContainer = styled.div`
	/* background-color: ${props => props.backgroundColor ?? '#fff'};
	display: flex;
	flex-direction: row;
	overflow-x: auto;
	overflow-y: hidden;
	min-height: 100vh;
	height: 100%;
	width: 100%;
	align-content: space-between;

	i:focus {
		outline: none; */
	}
`;
