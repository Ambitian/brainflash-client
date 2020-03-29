import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { authFetch } from './auth-fetch';

const serverProtocol = process.env.REACT_APP_SERVER_PROTOCOL;
const serverHost = process.env.REACT_APP_SERVER_HOST;
const serverPort = process.env.REACT_APP_SERVER_PORT;

export const client = new ApolloClient({
  link: createUploadLink({
    uri: `${serverProtocol}://${serverHost}:${serverPort}/api`,
    fetch: authFetch,
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
