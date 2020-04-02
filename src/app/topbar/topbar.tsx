import React from 'react';
import { SearchBar } from './search-bar/search-bar';
import { NotificationBell } from './notification-bell/notification-bell';
import { UserDropdown } from './user-dropdown/user-dropdown';

import './topbar.scss';

export const Topbar = () => {
  return (
    <div className="topbar">
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="panel-container">
        <NotificationBell />
        <UserDropdown />
      </div>
    </div>
  );
};
