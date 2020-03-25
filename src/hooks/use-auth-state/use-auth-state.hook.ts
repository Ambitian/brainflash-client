import React from 'react';
import { AuthStateApi, AuthContext } from '../../context/auth/auth.context';

export const useAuthState = (): AuthStateApi => {
  const context = React.useContext(AuthContext) as AuthStateApi;

  if (!context) {
    throw new Error('useAuthState should be used within an AuthProvider');
  }

  return context;
};
