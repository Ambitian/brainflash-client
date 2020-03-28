import React from 'react';

import bellImage from '../../../assets/images/bell.svg';

import './notification-bell.scss';
import { Button } from 'antd';

export const NotificationBell = () => {
  // TODO: Implement fetching notification count
  const [notificationCount] = React.useState(10);

  const onClick = () => {
    // TODO: Implement navigation switch to notification view
  };

  return (
    <Button className="notification-bell" onClick={onClick}>
      <div className="notification-bell__count">
        {notificationCount > 9 ? `+9` : notificationCount}
      </div>
      <img
        src={bellImage}
        alt="Notification Bell"
        className="notification-bell__img"
      />
    </Button>
  );
};
