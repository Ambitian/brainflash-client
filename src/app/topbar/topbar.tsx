import React from 'react';
import { SearchBar } from './search-bar/search-bar';

import './topbar.scss';
import { CreateDeckButton } from './create-deck-button/create-deck-button';
import { NotificationBell } from './notification-bell/notification-bell';

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="panel-container">
        <NotificationBell />
        <CreateDeckButton />
      </div>
    </div>
  );
};
