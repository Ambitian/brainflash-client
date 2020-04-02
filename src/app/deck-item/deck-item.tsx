import React from 'react';
import { StarContainer } from '../../ui/star-container/star-container';

import './deck-item.scss';

interface DeckItemProps {
  id: string;
  title: string;
  rating: number;
  ratingCount: number;
  onSelect?: (id: string) => void;
  imageUrl?: string;
  selected?: boolean;
}

export const DeckItem = ({
  id,
  title,
  rating,
  ratingCount,
  onSelect,
  imageUrl,
  selected = false,
}: DeckItemProps) => {
  const ratingSummary = React.useMemo(() => rating / ratingCount, [
    rating,
    ratingCount,
  ]);

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
      {imageUrl ? (
        <img src={imageUrl} alt="Deck" className="img-container" />
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
