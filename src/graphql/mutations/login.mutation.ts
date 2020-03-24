import gql from 'graphql-tag';

export interface LoginMutationPayload {
  email: string;
  password: string;
}

export const LOGIN_MUTATION = gql`
  mutation($input: LoginInput!) {
    login(input: $input) {
      jwt
    }
  }
`;
