import { DeckListActionTypes, SET_SELECTED_DECK_ID } from './deck-list.reducer';

export const setSelectedDeckId = (id: string): DeckListActionTypes => ({
  type: SET_SELECTED_DECK_ID,
  id,
});
