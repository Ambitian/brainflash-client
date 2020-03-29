import React from 'react';

import selectDeckImg from '../../../assets/images/select-deck.svg';

import './no-deck-selected-placeholder.scss';

export const NoDeckSelectedPlaceholder = () => {
  return (
    <div className="no-deck-selected-placeholder">
      <h3 className="info-text">
        Select <span className="highlight">deck</span> from the list to see it
        details
      </h3>
      <img src={selectDeckImg} alt="Select Deck" className="select-deck-img" />
    </div>
  );
};
