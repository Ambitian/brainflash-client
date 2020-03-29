import { AppAction } from '../../types';

export const SET_SELECTED_DECK_ID = 'deck-list/set-selected-deck-id';

export type DeckListActionTypes = AppAction<
  typeof SET_SELECTED_DECK_ID,
  { id: string }
>;

export interface DeckListState {
  selectedDeckId: string | null;
}

export const deckListReducer = (
  state: DeckListState,
  action: DeckListActionTypes,
): DeckListState => {
  switch (action.type) {
    case SET_SELECTED_DECK_ID: {
      return {
        ...state,
        selectedDeckId: action.id,
      };
    }

    default:
      return state;
  }
};
