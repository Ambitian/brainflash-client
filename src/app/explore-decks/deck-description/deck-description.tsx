import React from 'react';
import { StarContainer } from '../../../ui/star-container/star-container';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

import './deck-description.scss';
import { GetDeckData } from '../../../graphql/queries/get-deck.query';
import { AppRoute } from '../../../routing/app-routes';
import { useRatingSummary } from '../../../hooks/use-rating-summary/use-rating-summary.hook';

export const DeckDescription = ({
  id,
  title,
  description,
  rating,
  ratingCount,
}: GetDeckData) => {
  const ratingSummary = useRatingSummary(rating, ratingCount);

  const text = React.useMemo(
    () => (description ? description.split(' ') : []),
    [description],
  );

  return (
    <div className="deck-description-container">
      <div
        className="deck-img"
        style={{
          backgroundImage: 'url(https://i.picsum.photos/id/667/1920/1080.jpg)',
        }}
      ></div>
      <div className="rating-container">
        <StarContainer activeStarCount={Math.floor(ratingSummary)} />
        <div className="rating-summary">{ratingSummary.toFixed(1)}</div>
        <div className="rating-count">{ratingCount} ratings</div>
      </div>

      <h2 className="deck-title">{title}</h2>

      <div className="deck-description">
        {text.slice(0, 50).join(' ').trimEnd()}
        {text.length > 101 ? '...' : ''}
      </div>
      <Link className="deck-details-link" to={`${AppRoute.DECK_LIST}/${id}`}>
        View Details!
      </Link>
      <div className="deck-action-buttons">
        <Button className="action-btn" icon="fire" type="primary">
          Enroll now!
        </Button>
        <Button className="action-btn" icon="calendar">
          Schedule for later
        </Button>
      </div>
    </div>
  );
};
