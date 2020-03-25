import React from 'react';

import './field-error.scss';

interface FieldErrorProps {
  message: string;
}

export const FieldError = ({ message }: FieldErrorProps) => {
  return <p className="field-error">{message}</p>;
};
