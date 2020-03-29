import React from 'react';
import { DeckListState, DeckListActionTypes } from './deck-list.reducer';

export type DeckListStateApi = {
  state: DeckListState;
  dispatch: React.Dispatch<DeckListActionTypes>;
};

export const deckListInitialState: DeckListState = {
  selectedDeckId: null,
};

export const DeckListContext = React.createContext<
  DeckListState | DeckListStateApi
>(deckListInitialState);
