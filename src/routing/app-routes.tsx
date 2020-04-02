import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginContainer } from '../app/login/login-container';
import { AuthorizedRoute } from './authorized-route';
import { NavigationLayout } from '../app/navigation-layout/navigation-layout';

export enum AppRoute {
  LOGIN = '/login',
  DASHBOARD = '/',
  DECK_LIST = '/explore-decks',
  YOUR_DECKS = '/your-decks',
  PINNED_DECKS = '/pinned-decks',
  DECK_CREATOR = '/deck-creator',
}

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path={AppRoute.LOGIN} component={LoginContainer} />
      <AuthorizedRoute path={AppRoute.DASHBOARD} component={NavigationLayout} />
    </Switch>
  );
};
