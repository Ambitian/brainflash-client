import React from 'react';
import {
  DeckListState,
  DeckListActionTypes,
  deckListReducer,
} from '../context/deck-list/deck-list.reducer';
import {
  deckListInitialState,
  DeckListContext,
} from '../context/deck-list/deck-list.context';

export const DeckListStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = React.useReducer<
    React.Reducer<DeckListState, DeckListActionTypes>
  >(deckListReducer, deckListInitialState);

  return (
    <DeckListContext.Provider value={{ dispatch, state }}>
      {children}
    </DeckListContext.Provider>
  );
};
