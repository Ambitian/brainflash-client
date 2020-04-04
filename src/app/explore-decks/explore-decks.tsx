import React from 'react';
import { DeckList } from './deck-list/deck-list';
import { useDeckListState } from '../../hooks/use-deck-list-state/use-deck-list-state.hook';
import { DeckDescription } from './deck-description/deck-description';
import { NoSelectedDeck } from './no-selected-deck/no-selected-deck';
import { useQuery } from 'react-apollo';
import { GET_PUBLIC_DECKS } from '../../graphql/queries/get-public-decks.query';
import { NoData } from '../../ui/no-data/no-data';
import { LoadingContainer } from '../../ui/loading-container/loading-container';

import './explore-decks.scss';

export const ExploreDecks = () => {
  const {
    state: { selectedDeckId },
  } = useDeckListState();

  const { data, loading } = useQuery(GET_PUBLIC_DECKS, {
    fetchPolicy: 'network-only',
  });

  return (
    <div className="explore-decks">
      {loading ? (
        <LoadingContainer text="Fetching decks yet..." />
      ) : data.getPublicDecks.length ? (
        <React.Fragment>
          <div className="deck-list-container">
            <DeckList decks={data?.getPublicDecks || []} />
          </div>
          <div className="deck-container">
            {selectedDeckId ? <DeckDescription /> : <NoSelectedDeck />}
          </div>
        </React.Fragment>
      ) : (
        <NoData text="There are no decks..." />
      )}
    </div>
  );
};
