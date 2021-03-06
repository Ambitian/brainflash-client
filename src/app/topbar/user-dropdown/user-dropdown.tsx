import React from 'react';
import { Dropdown, Menu, Button, Icon } from 'antd';

import './user-dropdown.scss';
import { useAuthState } from '../../../hooks/use-auth-state/use-auth-state.hook';
import { logout } from '../../../context/auth/auth.action-creators';
import { authStorage } from '../../../context/auth/auth.storage';

export const UserDropdown = () => {
  const {
    dispatch,
    state: { username },
  } = useAuthState();

  const onLogout = () => {
    dispatch(logout());
    authStorage.setAccessToken(null);
    authStorage.setRefreshToken(null);
  };

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={onLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-dropdown">
      <Dropdown
        overlay={menu}
        placement="bottomCenter"
        trigger={['click']}
        className="dropdown"
      >
        <Button className="user-dropdown__btn">
          Hello, {username}
          <Icon type="caret-down" />
        </Button>
      </Dropdown>
    </div>
  );
};
