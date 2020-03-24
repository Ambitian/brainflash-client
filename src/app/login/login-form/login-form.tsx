/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, Input, Icon, Checkbox, Button, Alert } from 'antd';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_MUTATION } from '../../../graphql/mutations/login.mutation';

import './login-form.scss';

export interface LoginData {
  email: string;
  password: string;
}

enum LoginErrorType {
  UNAUTHORIZED,
  VERIFY_EMAIL,
}

export const LoginForm = () => {
  const [data, setData] = React.useState<LoginData>({
    email: '',
    password: '',
  });
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const [errorType, setErrorType] = React.useState<LoginErrorType | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorType(null);

    try {
      await login({
        variables: { input: data },
      });
    } catch ({ graphQLErrors: [error] }) {
      setErrorType(
        error.message === 'Unauthorized.'
          ? LoginErrorType.UNAUTHORIZED
          : LoginErrorType.VERIFY_EMAIL,
      );
    }
  };

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <Form className="login-form" onSubmit={onSubmit}>
      {errorType !== null && (
        <Alert
          type="error"
          closable
          message={
            errorType === LoginErrorType.UNAUTHORIZED
              ? 'Unauthorized.'
              : 'Email is not verified.'
          }
          description={
            errorType === LoginErrorType.UNAUTHORIZED
              ? 'Email or password is incorrect.'
              : 'Please verify Your email.'
          }
        />
      )}
      <Form.Item label="Email address">
        <Input
          placeholder="Please provide email address"
          type="email"
          name="email"
          suffix={<Icon type="mail" />}
          onChange={onChange}
          value={data.email}
        />
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          name="password"
          onChange={onChange}
          value={data.password}
        />
        Don't remember password? <a href="#">Click here</a>
      </Form.Item>
      <Form.Item>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        className="login-button"
      >
        Log in
      </Button>
    </Form>
  );
};
