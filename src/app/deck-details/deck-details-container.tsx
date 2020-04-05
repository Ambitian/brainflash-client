import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import { GET_DECK_DETAILS_QUERY } from '../../graphql/queries/get-deck-details.query';
import { LoadingContainer } from '../../ui/loading-container/loading-container';
import { DeckDetails } from './deck-details';
import { NotFoundContainer } from '../../ui/not-found-container/not-found-container';

import './deck-details-container.scss';

export const DeckDetailsContainer = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading, error } = useQuery(GET_DECK_DETAILS_QUERY, {
    variables: {
      deckID: id,
    },
  });

  return (
    <div className="deck-details-container">
      {loading && <LoadingContainer text="Fetching deck details..." />}
      {!loading && data && <DeckDetails {...data?.getDeck} />}
      {!loading && error && <NotFoundContainer text="Deck does not exist" />}
    </div>
  );
};
