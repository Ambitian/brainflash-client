import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './deck-creator.scss';

export const DeckCreator = () => {
  return (
    <div className="deck-creator">
      <div className="right-slide"></div>
      <div className="inner-container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo" className="logo-img" />
          <h2 className="logo-text">Brainflash</h2>
        </div>
        <div className="form-container">
          <h1>FORM</h1>
        </div>
      </div>
    </div>
  );
};
