import React from 'react';
import { OptionItem } from '../option-item/option-item';

import './option-list.scss';

export const OptionList = () => {
  return (
    <ul className="option-list">
      <li className="option-list-item">
        <OptionItem
          numberOrder={1}
          title="Configuring your deck."
          description="Name your deck and select category which describes your deck best."
          active
        />
      </li>
      <li className="option-list-item">
        <OptionItem
          numberOrder={2}
          title="Describe the deck."
          description="Provide some words which will describe your deck."
        />
      </li>

      <li className="option-list-item">
        <OptionItem
          numberOrder={3}
          title="Add an image."
          description="Image is no needed, and you can add it later, but image
              describes deck best."
        />
      </li>
    </ul>
  );
};
