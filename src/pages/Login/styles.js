import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import loginBg from '../../assets/images/login_bg.png';
import AgroceoLogo from '../../assets/images/logoAgroceo.svg';
import { defaultTheme } from '../../theme';

const { colors, borderRadius, padding, text, margin } = defaultTheme;

export const BackgroundImg = styled.div`
    background: ${colors.loginImgOverlay} url(${loginBg});
    background-size: cover;
    min-width: 100%;
    background-blend-mode: multiply;

    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const LoginArea = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
    @media (max-width: 759px){
        width: 100%;
    }
`;

export const LoginForm = styled.div`
    width: 50%;
    height: 60%;

    background-color: ${colors.neutral0};
    border-radius: ${borderRadius.xl1};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${padding.exg};
`;

export const Header = styled.div`
    margin-top: ${margin.lg};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.div`
    font-size: ${text.size.large};
    font-weight: ${text.weight.bold};
    color: ${colors.darkGreen};
`;

export const Subtitle = styled.div`
    margin-top: ${margin.lg};
    font-size: ${text.size.small};
`;

export const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
`;

export const InputField = styled((props) => <TextField variant="outlined" required="true" {...props} />)`
    color: ${colors.gray};
    margin: ${margin.md};
    width: 100%;
`;

export const ActionButtons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
`;

export const LoginButton = styled((props) => <Button variant="contained" {...props} />)`
    width: 100%;
`;

export const Footer = styled.div``;

export const LogoArea = styled.div`
    width: 40%;
    height: 100vh;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    justify-content: center;
    @media (max-width: 759px){
        display: none;
        width: 0;
    }
`;

export const LogoSvg = styled.svg`
    height: 260px;
    width: 260px;
    background-image: url(${AgroceoLogo});
    background-repeat: no-repeat !important;
    @media (max-width: 1040px){
        height: 220px;
        width: 220px;
    }
`;

export const ContractsArea = styled.div`
    margin-bottom: ${margin.lg};
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
`;

export const ContractsDivider = styled.span`
    font-size: ${defaultTheme.text.size.medium};
    justify-self: center;
`;