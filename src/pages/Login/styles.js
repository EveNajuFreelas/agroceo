import { Button, TextField } from '@material-ui/core';
import styled from 'styled-components';
import loginBg from '../../assets/images/login_bg.png';
import { defaultTheme } from '../../theme';

const { colors, borderRadius, padding, text, margin } = defaultTheme;

export const BackgroundImg = styled.div`
    background: ${colors.loginImgOverlay} url(${loginBg});
    background-size: cover;
    min-width: 100%;
    background-blend-mode: multiply;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LoginArea = styled.div`
    width: 30%;
    height: 50%;

    background-color: ${colors.neutral0};
    border-radius: ${borderRadius.xl1};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 0 ${padding.exg};
`;

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Title = styled.div`
    font-size: ${text.size.h5};
    font-weight: ${text.weight.bold};
`;

export const Subtitle = styled.div`
    font-size: ${text.size.medium};
`;

export const InputsArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
`;

export const InputField = styled((props) => <TextField variant="outlined" {...props} />)`
    color: ${colors.gray};
    margin: ${margin.lg};
            
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