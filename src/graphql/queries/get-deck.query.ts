import gql from 'graphql-tag';

export interface GetDeckData {
  id: string;
  rating: number;
  ratingCount: number;
  title: string;
  description: string;
}

export const GET_DECK_QUERY = gql`
  query($deckID: ID!) {
    getDeck(deckID: $deckID) {
      id
      rating
      ratingCount
      title
      description
    }
  }
`;
