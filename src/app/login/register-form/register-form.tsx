import React from 'react';
import { useMutation } from 'react-apollo';
import { REGISTER_MUTATION } from '../../../graphql/mutations/register.mutation';
import { Form, Input, Button, Alert, Icon } from 'antd';
import { FieldError } from '../../../ui/field-error/field-error';

interface RegisterData {
  email: string;
  password: string;
  retypePassword: string;
  name: string;
}

export const RegisterForm = () => {
  const [data, setData] = React.useState<RegisterData>({
    email: '',
    password: '',
    retypePassword: '',
    name: '',
  });
  const [register, { loading }] = useMutation(REGISTER_MUTATION);

  const [errors, setErrors] = React.useState<Partial<RegisterData>>({});
  const [errorMessage, setErrorMessage] = React.useState('');
  const [registrationSuccess, setRegistrationSuccess] = React.useState(false);

  const onChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrorMessage('');
    setErrors({});
    setRegistrationSuccess(false);

    await registerUser();
  };

  const registerUser = async () => {
    try {
      const { retypePassword, ...input } = data;

      if (retypePassword !== data.password) {
        setErrors({
          ...errors,
          retypePassword: 'Passwords does not match',
        });
        return;
      }

      await register({
        variables: {
          input,
        },
      });
      setRegistrationSuccess(true);
      setData({
        email: '',
        name: '',
        password: '',
        retypePassword: '',
      });
    } catch ({ graphQLErrors: [error] }) {
      setErrorMessage(error.message);
      if (error.details) {
        const errors = Object.keys(error.details).reduce(
          (allErrors, key) => ({
            ...allErrors,
            [key]: error.details[key].message,
          }),
          {},
        );

        setErrors(errors);
      }
    }
  };

  const isButtonEnabled = Object.values(data).every((value) => Boolean(value));

  return (
    <Form className="register-form" onSubmit={onSubmit}>
      {errorMessage && (
        <Alert
          type="error"
          message="Registration error"
          description={errorMessage}
          closable
        />
      )}
      {registrationSuccess && (
        <Alert
          type="success"
          message="Registration Success!"
          description="Please verify Your email."
          closable
        />
      )}
      <Form.Item label="Email address">
        <Input
          placeholder="Provide email address"
          name="email"
          type="email"
          value={data.email}
          onChange={onChange}
          suffix={<Icon type="mail" />}
        />
        {errors.email && <FieldError message={errors.email} />}
      </Form.Item>
      <Form.Item label="Name">
        <Input
          placeholder="Provide name"
          name="name"
          type="text"
          value={data.name}
          onChange={onChange}
          suffix={<Icon type="user" />}
        />
        {errors.name && <FieldError message={errors.name} />}
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          placeholder="Provide password"
          name="password"
          type="password"
          value={data.password}
          onChange={onChange}
        />
        {errors.password && <FieldError message={errors.password} />}
      </Form.Item>
      <Form.Item label="Retype password">
        <Input.Password
          placeholder="Retype password"
          name="retypePassword"
          type="password"
          value={data.retypePassword}
          onChange={onChange}
        />
        {errors.retypePassword && (
          <FieldError message={errors.retypePassword} />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="register-button"
          loading={loading}
          disabled={!isButtonEnabled}
        >
          Sign up
        </Button>
      </Form.Item>
    </Form>
  );
};
