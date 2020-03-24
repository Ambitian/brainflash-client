import React from 'react';

import './register-switch.scss';
import { Button } from 'antd';

export enum SwitchState {
  REGISTER = 'register',
  LOGIN = 'login',
}

interface RegisterSwitchProps {
  currentState: SwitchState;
  onChange: (state: SwitchState) => void;
}

export const RegisterSwitch = ({
  currentState,
  onChange,
}: RegisterSwitchProps) => {
  const onButtonClick = (state: SwitchState) => () => onChange(state);

  return (
    <div className="register-switch">
      <Button
        className={`register-switch__option ${
          currentState === SwitchState.LOGIN
            ? 'register-switch__option--active'
            : ''
        }`}
        onClick={onButtonClick(SwitchState.LOGIN)}
      >
        Log In
      </Button>
      <Button
        className={`register-switch__option ${
          currentState === SwitchState.REGISTER
            ? 'register-switch__option--active'
            : ''
        }`}
        onClick={onButtonClick(SwitchState.REGISTER)}
      >
        Sign up
      </Button>
    </div>
  );
};
