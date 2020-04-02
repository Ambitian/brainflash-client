import React from 'react';
import { Redirect } from 'react-router-dom';
import { AppRoute } from '../../routing/app-routes';
import { Login } from './login';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';

export const LoginContainer = () => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  if (isAuthorized) {
    return <Redirect to={AppRoute.DASHBOARD} />;
  }

  return <Login />;
};
