import React from 'react';
import { useLazyQuery } from 'react-apollo';
import { GET_DECK_QUERY } from '../../../graphql/queries/get-deck.query';
import { DeckDescription } from '../deck-description/deck-description';
import { NoSelectedDeck } from '../no-selected-deck/no-selected-deck';
import { LoadingContainer } from '../../../ui/loading-container/loading-container';
import { NotFoundContainer } from '../../../ui/not-found-container/not-found-container';

interface DeckDescriptionContainerProps {
  selectedDeckId: string | null;
}

export const DeckDescriptionContainer = ({
  selectedDeckId,
}: DeckDescriptionContainerProps) => {
  const [loadSelectedDeck, { loading, data, error }] = useLazyQuery(
    GET_DECK_QUERY,
  );

  React.useEffect(() => {
    if (selectedDeckId) {
      loadSelectedDeck({
        variables: {
          deckID: selectedDeckId,
        },
      });
    }
  }, [selectedDeckId, loadSelectedDeck]);

  return (
    <div className="deck-container">
      {selectedDeckId ? (
        <React.Fragment>
          {loading && <LoadingContainer text="Fetching selected deck..." />}
          {!loading && data && <DeckDescription {...data?.getDeck} />}
          {!loading && error && (
            <NotFoundContainer text="Deck does not exist" />
          )}
        </React.Fragment>
      ) : (
        <NoSelectedDeck />
      )}
    </div>
  );
};
