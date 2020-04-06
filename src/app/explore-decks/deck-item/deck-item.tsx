import React from 'react';
import { StarContainer } from '../../../ui/star-container/star-container';

import './deck-item.scss';
import { useRatingSummary } from '../../../hooks/use-rating-summary/use-rating-summary.hook';

export interface DeckItemProps {
  id: string;
  title: string;
  rating: number;
  ratingCount: number;
  onSelect?: (id: string) => void;
  imgUrl?: string;
  selected?: boolean;
}

export const DeckItem = ({
  id,
  title,
  rating,
  ratingCount,
  onSelect,
  imgUrl,
  selected = false,
}: DeckItemProps) => {
  const ratingSummary = useRatingSummary(rating, ratingCount);

  const onClick = () => {
    if (onSelect) {
      onSelect(id);
    }
  };

  return (
    <div
      className={`deck-item ${selected ? 'deck-item--selected' : ''}`}
      title={title}
      onClick={onClick}
    >
      {imgUrl ? (
        <div
          style={{ backgroundImage: `url(${imgUrl})` }}
          className="img-container"
        ></div>
      ) : (
        <div className="img-container"></div>
      )}
      <div className="content">
        <div className="content__title">{title}</div>
        <div className="content__rating">
          <StarContainer
            activeStarCount={Math.floor(ratingSummary)}
            size={12}
          />
          <span className="rating-summary">{ratingSummary.toFixed(1)}</span>
          <span className="rating-count">{ratingCount} ratings</span>
        </div>
      </div>
    </div>
  );
};
