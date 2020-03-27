import React from 'react';
import { mount, shallow } from 'enzyme';
import { UserDropdown } from './user-dropdown';
import { Dropdown, Menu } from 'antd';
import { AuthContext, authInitialState } from '../../context/auth/auth.context';
import { logout } from '../../context/auth/auth.action-creators';

const wrapComponent = () => {
  return mount(<UserDropdown />);
};

describe('<UserDropdown /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should invoke logout action', () => {
    const dispatch = jest.fn();
    const state = authInitialState;
    const wrapper = mount(
      <AuthContext.Provider value={{ dispatch, state }}>
        <UserDropdown />
      </AuthContext.Provider>,
    );

    const dropdown = wrapper.find(Dropdown);
    const logoutBtn = shallow(<div>{dropdown.prop('overlay')}</div>).find(
      Menu.Item,
    );

    logoutBtn.simulate('click');

    expect(dispatch).toHaveBeenCalledWith(logout());
  });
});
