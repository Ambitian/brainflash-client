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
        <div className="content">
          <div className="form-container">
            <h1>FORM</h1>
          </div>
          <div className="information-container">
            <ul className="information-list">
              <li className="information-item">
                <div className="info-number">1</div>
                <div className="info-content">
                  <h4 className="title">Configuring your deck.</h4>
                  <p className="description">
                    Name your deck and select category which describes your deck
                    best.
                  </p>
                </div>
              </li>

              <li className="information-item">
                <div className="info-number">2</div>
                <div className="info-content">
                  <h4 className="title">Describe the deck.</h4>
                  <p className="description">
                    Provide some words which will describe your deck.
                  </p>
                </div>
              </li>

              <li className="information-item">
                <div className="info-number">3</div>
                <div className="info-content">
                  <h4 className="title">Add an image.</h4>
                  <p className="description">
                    Image is no needed, and you can add it later, but image
                    describes deck best.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
