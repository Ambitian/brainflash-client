import React from 'react';
import { mount } from 'enzyme';
import { SwitchState, RegisterSwitch } from './register-switch';

const defaultProps = {
  currentState: SwitchState.LOGIN,
  onChange: () => {},
};

const wrapComponent = (props = {}) => {
  return mount(<RegisterSwitch {...defaultProps} {...props} />);
};

describe('<RegisterSwitch /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = wrapComponent();

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should add proper class name to selected button', () => {
    const wrapper = wrapComponent({ currentState: SwitchState.REGISTER });

    const button = wrapper
      .find('button.register-switch__option--active')
      .first();

    expect(button.text()).toEqual('Sign up');
  });

  test('should invoke onChange function', () => {
    const onChange = jest.fn();
    const wrapper = wrapComponent({ onChange });

    const button = wrapper
      .find('button.register-switch__option--active')
      .first();

    button.simulate('click');

    expect(onChange).toHaveBeenCalledWith(SwitchState.LOGIN);
  });
});
