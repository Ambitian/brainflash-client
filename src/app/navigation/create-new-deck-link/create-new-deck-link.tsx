import React from 'react';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../routing/app-routes';
import { Icon } from 'antd';

import './create-new-deck-link.scss';

export const CreateNewDeckLink = () => {
  return (
    <Link to={AppRoute.DECK_CREATOR} className="create-deck-btn" type="primary">
      <span className="btn-text">Create new deck</span>
      <Icon type="plus" />
    </Link>
  );
};
