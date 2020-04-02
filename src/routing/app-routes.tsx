import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from '../app/home/home';
import { LoginContainer } from '../app/login/login-container';
import { AuthorizedRoute } from './authorized-route';

export enum AppRoute {
  LOGIN = '/login',
  DASHBOARD = '/',
  DECK_LIST = '/explore-decks/:category',
  YOUR_DECKS = '/your-decks',
  PINNED_DECKS = '/pinned-decks',
  DECK_CREATOR = '/deck-creator',
}

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.LOGIN} component={LoginContainer} />
      <AuthorizedRoute path={AppRoute.DASHBOARD} component={Home} />
    </Switch>
  );
};
