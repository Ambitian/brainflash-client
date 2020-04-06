import gql from 'graphql-tag';

export const GET_PUBLIC_DECKS = gql`
  query($category: String) {
    getPublicDecks(category: $category) {
      id
      title
      rating
      ratingCount
      imgUrl
    }
  }
`;
