import React from 'react';
import {
  DeckListStateApi,
  DeckListContext,
} from '../../context/deck-list/deck-list.context';

export const useDeckListState = (): DeckListStateApi => {
  const context = React.useContext(DeckListContext) as DeckListStateApi;

  if (!context) {
    throw new Error(
      'useDeckListState should be used within an DeckListProvider',
    );
  }

  return context;
};
