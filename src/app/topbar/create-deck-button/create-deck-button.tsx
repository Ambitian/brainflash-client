import React from 'react';
import { Button, Icon } from 'antd';

import './create-deck-button.scss';

export const CreateDeckButton = () => {
  const onClick = () => {
    // TODO: Implement logic
  };

  return (
    <Button className="create-deck-btn" onClick={onClick}>
      <span className="create-deck-btn__text">Create new deck</span>
      <Icon className="create-deck-btn__icon" type="plus" />
    </Button>
  );
};
