import React from 'react';
import { Dropdown, Menu, Button, Icon } from 'antd';

import './user-dropdown.scss';
import { useAuthState } from '../../hooks/use-auth-state/use-auth-state.hook';
import { logout } from '../../context/auth/auth.action-creators';

export const UserDropdown = () => {
  const { dispatch } = useAuthState();

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={() => dispatch(logout())}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="user-dropdown">
      <Dropdown
        overlay={menu}
        placement="topCenter"
        trigger={['click']}
        className="dropdown"
      >
        <Button className="user-dropdown__btn">
          Hello, Mikołaj
          <Icon type="caret-up" />
        </Button>
      </Dropdown>
    </div>
  );
};
