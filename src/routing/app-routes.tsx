import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../app/home/home';
import { LoginContainer } from '../app/login/login-container';
import { AuthorizedRoute } from './authorized-route';

export enum AppRoute {
  HOME = '/',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.LOGIN} component={LoginContainer} />
      <AuthorizedRoute path={AppRoute.HOME} component={Home} />
    </Switch>
  );
};
