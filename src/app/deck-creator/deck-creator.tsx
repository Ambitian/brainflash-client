import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './deck-creator.scss';
import { OptionItem } from './option-item/option-item';

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
                <OptionItem
                  numberOrder={1}
                  title="Configuring your deck."
                  description="Name your deck and select category which describes your deck best."
                  active
                />
              </li>

              <li className="information-item">
                <OptionItem
                  numberOrder={2}
                  title="Describe the deck."
                  description="Provide some words which will describe your deck."
                />
              </li>

              <li className="information-item">
                <OptionItem
                  numberOrder={3}
                  title="Add an image."
                  description="Image is no needed, and you can add it later, but image
              describes deck best."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
