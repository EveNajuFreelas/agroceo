import styled, { createGlobalStyle } from 'styled-components'
import { defaultTheme } from '../theme';

export const CSSReset = createGlobalStyle`
  body {
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 !important;
    font-family: ${defaultTheme.fonts.regular};
  }
`;

export const MainContainer = styled.div`
    background-color: ${props => props.backgroundColor ?? '#fff'};
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    align-content: space-between;

    i:focus {
        outline: none;
    }
`;
