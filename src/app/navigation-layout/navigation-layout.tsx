import React from 'react';
import { Topbar } from '../topbar/topbar';
import { Navigation } from '../navigation/navigation';
import { Switch } from 'react-router-dom';
import { AuthorizedRoute } from '../../routing/authorized-route';
import { AppRoute } from '../../routing/app-routes';
import { Dashboard } from '../dashboard/dashboard';
import { YourDecks } from '../your-decks/your-decks';
import { PinnedDecks } from '../pinned-decks/pinned-decks';
import { ExploreDecksContainer } from '../explore-decks/explore-decks-container';
import { DeckDetailsContainer } from '../deck-details/deck-details-container';

import './navigation-layout.scss';

export const NavigationLayout = () => {
  return (
    <div className="navigation-layout">
      <div className="navigation-content">
        <Navigation />
      </div>
      <div className="body-container">
        <div className="topbar-container">
          <Topbar />
        </div>
        <div className="content-container">
          <Switch>
            <AuthorizedRoute
              exact
              path={AppRoute.DASHBOARD}
              component={Dashboard}
            />
            <AuthorizedRoute
              exact
              path={AppRoute.DECK_LIST}
              component={ExploreDecksContainer}
            />
            <AuthorizedRoute
              exact
              path={`${AppRoute.DECK_LIST}/:id`}
              component={DeckDetailsContainer}
            />
            <AuthorizedRoute
              exact
              path={AppRoute.YOUR_DECKS}
              component={YourDecks}
            />
            <AuthorizedRoute
              exact
              path={AppRoute.PINNED_DECKS}
              component={PinnedDecks}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};
