import React from 'react';
import { RouteProps, Redirect, Route } from 'react-router-dom';
import { useAuthState } from '../hooks/use-auth-state/use-auth-state.hook';
import { AppRoute } from './app-routes';

export const AuthorizedRoute = (props: RouteProps) => {
  const {
    state: { isAuthorized },
  } = useAuthState();

  if (!isAuthorized) {
    return <Redirect to={AppRoute.LOGIN} />;
  }

  return <Route {...props} />;
};
