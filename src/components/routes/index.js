import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useAuthentication } from "../../context/authContext";
import { GlobalContainer } from '../GlobalContainer';

export function LoggedRoute({ isAdmin, component: Component, ...rest }) {
  const { user } = useAuthentication();

  return (
    <GlobalContainer>
      <Route {...rest} render={props => {
        if (!user) {
          return <Redirect to='/app/login' />
        }

        return <Component {...rest} />
      }} />
    </GlobalContainer>
  )
}

export function NotLoggedRoute({ component: Component, ...rest }) {
  const { user } = useAuthentication();

  return (
    <Route {...rest} render={props => {
      if (user) {
        return <Redirect to="/app" />
      }
      return <Component {...rest} />
    }} />
  )
}