import React from 'react';

import selectDeckImg from '../../../assets/images/select-deck.svg';

import './no-selected-deck.scss';

export const NoSelectedDeck = () => {
  return (
    <div className="no-selected-deck">
      <h3 className="select-deck-text">
        Select <span className="highlight">deck</span> from the list to see it
        details.
      </h3>
      <img
        src={selectDeckImg}
        alt="Select deck placeholder"
        className="select-deck-img"
      />
    </div>
  );
};
