import React from 'react';

import './deck-detail.scss';

interface DeckDetailProps {
  title: string;
  description: string;
  ImgComponent: React.ReactType<{}>;
}

export const DeckDetail = ({
  title,
  description,
  ImgComponent,
}: DeckDetailProps) => {
  return (
    <div className="deck-detail">
      <ImgComponent className="deck-detail__img" />
      <div className="deck-detail__title">
        <h5 className="detail-title">{title}</h5>
        <p className="detail-description">{description}</p>
      </div>
    </div>
  );
};
