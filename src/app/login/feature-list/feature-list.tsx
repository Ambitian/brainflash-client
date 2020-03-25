import React from 'react';

import targetIcon from '../../../assets/images/target.svg';
import deckIcon from '../../../assets/images/deck.svg';
import listIcon from '../../../assets/images/list.svg';

import './feature-list.scss';

export const FeatureList = () => {
  return (
    <ul className="feature-list">
      <li className="feature">
        <img src={targetIcon} alt="Target" className="feature__icon" />
        <span className="feature__text">Track Your learning goals</span>
      </li>
      <li className="feature">
        <img src={listIcon} alt="List" className="feature__icon" />
        <span className="feature__text">Select from many categories</span>
      </li>
      <li className="feature">
        <img src={deckIcon} alt="Deck" className="feature__icon" />
        <span className="feature__text">
          Learn by shuffle deck of flashcards
        </span>
      </li>
    </ul>
  );
};
