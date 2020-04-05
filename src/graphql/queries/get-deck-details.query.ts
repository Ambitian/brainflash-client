import gql from 'graphql-tag';

export interface GetDeckDetailsData {
  id: string;
  title: string;
  rating: number;
  ratingCount: number;
  description: string;
  category: string;
  cardCount: number;
}

export const GET_DECK_DETAILS_QUERY = gql`
  query($deckID: ID!) {
    getDeck(deckID: $deckID) {
      id
      title
      rating
      ratingCount
      description
      category
      cardCount
    }
  }
`;
