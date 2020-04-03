import React from 'react';
import { DeckListStateProvider } from '../../providers/deck-list.provider';
import { ExploreDecks } from './explore-decks';

export const ExploreDecksContainer = () => {
  return (
    <DeckListStateProvider>
      <ExploreDecks />
    </DeckListStateProvider>
  );
};
