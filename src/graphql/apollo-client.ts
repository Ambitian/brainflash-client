import { ApolloClient } from 'apollo-client';
import { createUploadLink } from 'apollo-upload-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

const serverProtocol = process.env.REACT_APP_SERVER_PROTOCOL;
const serverHost = process.env.REACT_APP_SERVER_HOST;
const serverPort = process.env.REACT_APP_SERVER_PORT;

export const client = new ApolloClient({
  link: createUploadLink({
    uri: `${serverProtocol}://${serverHost}:${serverPort}/api`,
    headers: {
      ...(localStorage.getItem('token') && {
        authorization: localStorage.getItem('token'),
      }),
    },
  }),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
