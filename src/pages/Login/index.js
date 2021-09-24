import { Button } from '@material-ui/core';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { 
  BackgroundImg, 
  InputField, 
  LoginArea, 
  Subtitle,
  Title, 
  Header, 
  InputsArea, 
  ActionButtons, 
  LoginButton
} from './styles';

const Login = () => {
  const { t } = useTranslation();

  return (
      <BackgroundImg>
        <LoginArea>
          <Header>
            <Title>{t('loginTitle')}</Title>
            <Subtitle>{t('loginSubtitle')}</Subtitle>
          </Header>

          <InputsArea>
            <InputField placeholder="(00) 0 0000-0000" label={t('phone')} />
            <InputField placeholder={t('password')} label={t('password')} />
          </InputsArea>

          <ActionButtons>
            <LoginButton>{t('signIn')}</LoginButton>
            <Button>{t('forgotPw')}</Button>
          </ActionButtons>
        </LoginArea>

        <p>tests Login Page</p>
      </BackgroundImg>
  )
}


export default Login;