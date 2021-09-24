import { Button } from '@material-ui/core';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core'
import { defaultTheme } from '../../theme';
import {
  BackgroundImg,
  InputField,
  LoginArea,
  LoginForm,
  LogoArea,
  LogoSvg,
  ContractsArea,
  ContractsDivider,
  Subtitle,
  Title,
  Header,
  InputsArea,
  ActionButtons,
  LoginButton
} from './styles';
//import { FormatUnderlined } from '@material-ui/icons';

const useStyles = makeStyles({
  inputField:{
    margin: 10,
    color: '#272727',
  },
  loginButton: {
    backgroundColor: defaultTheme.colors.green,
    color: defaultTheme.colors.neutral0,
    '&:hover':{
      backgroundColor: defaultTheme.colors.green,
      color: defaultTheme.colors.neutral0,
    }
  },
  forgotPassword: {
    fontSize: 10,
    color: defaultTheme.colors.green,
    '&:hover':{
      backgroundcolor: 'transparent',
    }
  },
  termsAndPolicies: {
    fontSize: 10,
    textDecoration: 'none',
    color: defaultTheme.colors.neutral3,
    '&:hover':{
      textDecoration: 'underline',
      backgroundColor: 'transparent',
      color: defaultTheme.colors.green,
    }
  }
})

const Login = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <BackgroundImg>
      <LoginArea>
        <LoginForm>
          
          <Header>
            <Title>{t('loginTitle')}</Title>
            <Subtitle>{t('loginSubtitle')}</Subtitle>
          </Header>

          <InputsArea>
            <InputField className={classes.inputField} placeholder="(00) 0 0000-0000" label={t('phone')} />
            <InputField className={classes.inputField} placeholder={t('password')} label={t('password')} />
          </InputsArea>

          <ActionButtons>
            <LoginButton className={classes.loginButton}>{t('signIn')}</LoginButton>
            <Button className={classes.forgotPassword}>{t('forgotPw')}</Button>
          </ActionButtons>

          <ContractsArea>
            <Button className={classes.termsAndPolicies}>{t('TermsnCond')}</Button>
            <ContractsDivider> e </ContractsDivider>
            <Button className={classes.termsAndPolicies}>{t('PrivacyPolicy')}</Button>
          </ContractsArea>

        </LoginForm>
      </LoginArea>

      <LogoArea>
        <LogoSvg />
      </LogoArea>
    </BackgroundImg>
  )
}

export default Login;