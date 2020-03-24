import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { LoginForm } from './login-form';
import { Input, Button, Alert } from 'antd';
import { act } from 'react-dom/test-utils';
import { LOGIN_MUTATION } from '../../../graphql/mutations/login.mutation';

const mocks: MockedResponse[] = [
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        input: {
          email: 'john@doe.com',
          password: 'test123',
        },
      },
    },
    result: {
      data: {
        login: {
          jwt: '',
        },
      },
    },
  },
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        input: {
          email: '',
          password: '',
        },
      },
    },
    result: {
      errors: [
        // @ts-ignore
        {
          message: 'Unauthorized.',
        },
      ],
    },
  },
  {
    request: {
      query: LOGIN_MUTATION,
      variables: {
        input: {
          email: 'not@verified.com',
          password: '',
        },
      },
    },
    result: {
      errors: [
        // @ts-ignore
        {
          message: 'Email not verified.',
        },
      ],
    },
  },
];

const wrapComponent = () => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <LoginForm />
    </MockedProvider>
  );
};

describe('<LoginForm /> Component', () => {
  test('should render without crashing', async () => {
    const wrapper = mount(wrapComponent());

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should change email value', async () => {
    const wrapper = mount(wrapComponent());

    let emailInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'email')
      .find('input');

    expect(emailInput.prop('value')).toEqual('');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'some@email.com' },
    });

    emailInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'email')
      .find('input');

    expect(emailInput.prop('value')).toEqual('some@email.com');
  });

  test('should set loading on submit button', async () => {
    const wrapper = mount(wrapComponent());

    let loginButton = wrapper.find(Button);

    expect(loginButton.prop('loading')).toBeFalsy();

    const emailInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'email')
      .find('input');

    const passwordInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'password')
      .find('input');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'john@doe.com' },
    });

    passwordInput.simulate('change', {
      target: { name: 'password', value: 'test123' },
    });

    await act(async () => {
      await wait(10);

      loginButton.simulate('submit');
    });

    loginButton = wrapper.find(Button);

    expect(loginButton.prop('loading')).toBeTruthy();
  });

  test('should render unauthorized error message', async () => {
    const wrapper = mount(wrapComponent());

    let errorMessage = wrapper.find(Alert);

    expect(errorMessage.length).toEqual(0);

    const loginButton = wrapper.find(Button);

    await act(async () => {
      loginButton.simulate('submit');
      errorMessage = wrapper.find(Alert);

      await wait(100);
    });

    wrapper.update();

    errorMessage = wrapper.find(Alert);

    expect(errorMessage.length).toEqual(1);
    expect(errorMessage.prop('message')).toEqual('Unauthorized.');
    expect(errorMessage.prop('description')).toEqual(
      'Email or password is incorrect.',
    );
  });

  test('should render not verified email error message', async () => {
    const wrapper = mount(wrapComponent());

    let errorMessage = wrapper.find(Alert);

    expect(errorMessage.length).toEqual(0);

    const loginButton = wrapper.find(Button);

    const emailInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'email')
      .find('input');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'not@verified.com' },
    });

    await act(async () => {
      loginButton.simulate('submit');
      errorMessage = wrapper.find(Alert);

      await wait(100);
    });

    wrapper.update();

    errorMessage = wrapper.find(Alert);

    expect(errorMessage.length).toEqual(1);
    expect(errorMessage.prop('message')).toEqual('Email is not verified.');
    expect(errorMessage.prop('description')).toEqual(
      'Please verify Your email.',
    );
  });
});
