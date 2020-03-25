import gql from 'graphql-tag';

export const REGISTER_MUTATION = gql`
  mutation($input: RegisterInput!) {
    register(input: $input) {
      _
    }
  }
`;
