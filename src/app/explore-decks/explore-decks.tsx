import React from 'react';
import { DeckList } from './deck-list/deck-list';

import './explore-decks.scss';
import { useDeckListState } from '../../hooks/use-deck-list-state/use-deck-list-state.hook';
import { DeckDescription } from './deck-description/deck-description';
import { NoSelectedDeck } from './no-selected-deck/no-selected-deck';

export const ExploreDecks = () => {
  const {
    state: { selectedDeckId },
  } = useDeckListState();

  return (
    <div className="explore-decks">
      <div className="deck-list-container">
        <DeckList />
      </div>
      <div className="deck-container">
        {selectedDeckId ? <DeckDescription /> : <NoSelectedDeck />}
      </div>
    </div>
  );
};
