import React from 'react';
import { mount } from 'enzyme';
import { MockedProvider, MockedResponse, wait } from '@apollo/react-testing';
import { REGISTER_MUTATION } from '../../../graphql/mutations/register.mutation';
import { RegisterForm } from './register-form';
import { Input, Button, Alert } from 'antd';
import { act } from 'react-dom/test-utils';
import { FieldError } from '../../../ui/field-error/field-error';

const mocks: MockedResponse[] = [
  {
    request: {
      query: REGISTER_MUTATION,
      variables: {
        input: {
          email: '',
          password: '',
          name: '',
        },
      },
    },
    result: {
      errors: [
        {
          message: 'Input malformed.',
          // @ts-ignore
          details: {
            email: {
              message: 'Email is invalid',
            },
          },
        },
      ],
    },
  },
  {
    request: {
      query: REGISTER_MUTATION,
      variables: {
        input: {
          email: 'good@email.com',
          password: '',
          name: '',
        },
      },
    },
    result: {
      data: {
        register: {
          _: true,
        },
      },
    },
  },
];

const wrapComponent = () => {
  return (
    <MockedProvider mocks={mocks} addTypename={false}>
      <RegisterForm />
    </MockedProvider>
  );
};

describe('<RegisterForm /> Component', () => {
  test('should render without crashing', () => {
    const wrapper = mount(wrapComponent());

    expect(wrapper).toBeDefined();
    expect(wrapper).toHaveLength(1);
  });

  test('should change email value', () => {
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

  test('should display error messages', async () => {
    const wrapper = mount(wrapComponent());

    let errorMessage = wrapper.find(Alert);

    let fieldError = wrapper.find(FieldError);

    expect(errorMessage.length).toEqual(0);
    expect(fieldError.length).toEqual(0);

    const loginButton = wrapper.find(Button);

    await act(async () => {
      loginButton.simulate('submit');
      errorMessage = wrapper.find(Alert);

      await wait(100);
    });

    wrapper.update();

    errorMessage = wrapper.find(Alert);
    fieldError = wrapper.find(FieldError);

    expect(errorMessage.length).toEqual(1);
    expect(fieldError.text()).toEqual('Email is invalid');
  });

  test('should display success message on proper register', async () => {
    const wrapper = mount(wrapComponent());

    let errorMessage = wrapper.find(Alert);

    let fieldError = wrapper.find(FieldError);

    expect(errorMessage.length).toEqual(0);
    expect(fieldError.length).toEqual(0);

    const loginButton = wrapper.find(Button);

    await act(async () => {
      loginButton.simulate('submit');
      errorMessage = wrapper.find(Alert);

      await wait(100);
    });

    wrapper.update();

    errorMessage = wrapper.find(Alert);
    fieldError = wrapper.find(FieldError);

    expect(errorMessage.length).toEqual(1);
    expect(errorMessage.prop('message')).toEqual('Registration error');
    expect(fieldError.text()).toEqual('Email is invalid');
  });

  test('should display success message on proper register', async () => {
    const wrapper = mount(wrapComponent());

    let successMessage = wrapper.find(Alert);

    expect(successMessage.length).toEqual(0);

    const loginButton = wrapper.find(Button);

    const emailInput = wrapper
      .find(Input)
      .findWhere((cmp) => cmp.prop('type') === 'email')
      .find('input');

    emailInput.simulate('change', {
      target: { name: 'email', value: 'good@email.com' },
    });

    await act(async () => {
      loginButton.simulate('submit');

      await wait(100);
    });

    wrapper.update();

    successMessage = wrapper.find(Alert);

    expect(successMessage.length).toEqual(1);
    expect(successMessage.prop('message')).toEqual('Registration Success!');
  });
});
