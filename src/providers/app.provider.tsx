import React from 'react';
import { AuthStateProvider } from './auth.provider';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { client } from '../graphql/apollo-client';

export const AppProvider = ({ children }: { children: React.ReactNode }) => (
  <Router>
    <ApolloProvider client={client}>
      <AuthStateProvider>{children}</AuthStateProvider>
    </ApolloProvider>
  </Router>
);
