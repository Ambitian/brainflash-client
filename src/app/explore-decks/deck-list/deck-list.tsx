import React from 'react';
import { DeckItemProps, DeckItem } from '../deck-item/deck-item';

import './deck-list.scss';

export const DeckList = () => {
  // TODO: Fetch decks from the server
  const [decks] = React.useState<DeckItemProps[]>([
    {
      id: '1',
      title: 'Object oriented programming',
      rating: 10293912,
      ratingCount: 2202399,
      imageUrl: 'https://picsum.photos/85',
    },
    {
      id: '2',
      title: 'JavaScript ES6',
      rating: 20,
      ratingCount: 4,
      imageUrl: 'https://picsum.photos/85',
    },
    {
      id: '3',
      title: 'Security Basics',
      rating: 22,
      ratingCount: 5,
      imageUrl: 'https://picsum.photos/85',
    },
  ]);

  return (
    <ul className="deck-list">
      {decks.map((deck) => (
        <li key={deck.id} className="deck-list__item">
          <DeckItem {...deck} />
        </li>
      ))}
    </ul>
  );
};
