import React from 'react';
import { DeckItemProps, DeckItem } from '../deck-item/deck-item';

import './deck-list.scss';
import { useDeckListState } from '../../../hooks/use-deck-list-state/use-deck-list-state.hook';
import { setSelectedDeckId } from '../../../context/deck-list/deck-list.action-creators';

interface DeckListProps {
  decks: DeckItemProps[];
}

export const DeckList = ({ decks }: DeckListProps) => {
  const {
    state: { selectedDeckId },
    dispatch,
  } = useDeckListState();

  const onDeckSelect = (id: string) => {
    dispatch(setSelectedDeckId(id));
  };

  return (
    <ul className="deck-list">
      {decks.map((deck) => (
        <li key={deck.id} className="deck-list__item">
          <DeckItem
            {...deck}
            selected={deck.id === selectedDeckId}
            onSelect={onDeckSelect}
          />
        </li>
      ))}
    </ul>
  );
};
