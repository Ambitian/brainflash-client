import React from 'react';

import './login.scss';
import logo from '../../assets/images/logo.svg';
import loginImage from '../../assets/images/login-img.svg';

import { RegisterSwitch, SwitchState } from './register-switch/register-switch';
import { LoginForm } from './login-form/login-form';
import { FeatureList } from './feature-list/feature-list';
import { RegisterForm } from './register-form/register-form';

export const Login = () => {
  const [currentState, setCurrentState] = React.useState(SwitchState.LOGIN);

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="logo">
          <img alt="Logo" src={logo} className="logo__image" />
          <h2 className="logo__title">Brainflash</h2>
        </div>
        <RegisterSwitch
          currentState={currentState}
          onChange={setCurrentState}
        />
        {currentState === SwitchState.LOGIN ? <LoginForm /> : <RegisterForm />}
      </div>
      <div className="page-content">
        <img
          alt="Login content"
          className="page-content__img"
          src={loginImage}
        />
        <div className="content-features">
          <FeatureList />
          <h3 className="page-content__text">
            With{' '}
            <span className="page-content__text--highlight">Brainflash</span>{' '}
            You can create and share flashcards for any topic.
          </h3>
        </div>
      </div>
    </div>
  );
};
