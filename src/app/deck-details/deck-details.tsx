import React from 'react';
import { StarContainer } from '../../ui/star-container/star-container';
import { Button } from 'antd';
import { DeckDetail } from './deck-detail/deck-detail';

import { ReactComponent as ProgrammingImg } from '../../assets/images/data.svg';
import { ReactComponent as CardSetImg } from '../../assets/images/deck.svg';
import { ReactComponent as LanguageImg } from '../../assets/images/translate.svg';

import './deck-details.scss';
import { useRatingSummary } from '../../hooks/use-rating-summary/use-rating-summary.hook';

interface DeckDetailsProps {
  title: string;
  description: string;
  rating: number;
  ratingCount: number;
}

export const DeckDetails = ({
  title,
  description,
  rating,
  ratingCount,
}: DeckDetailsProps) => {
  const ratingSummary = useRatingSummary(rating, ratingCount);

  return (
    <div className="deck-details">
      <div className="deck-details__header">
        <div className="header-container">
          <div
            className="deck-img"
            style={{
              backgroundImage:
                'url(https://i.picsum.photos/id/667/1920/1080.jpg)',
            }}
          ></div>
          <div className="deck-title-container">
            <h3 className="deck-title">{title}</h3>
            <div className="rating-container">
              <StarContainer
                activeStarCount={Math.floor(ratingSummary)}
                size={35}
              />
              <div className="rating-summary">{ratingSummary.toFixed(1)}</div>
              <div className="rating-count">{ratingCount} ratings</div>
            </div>
            <div className="buttons-container">
              <Button className="action-btn" type="primary" icon="fire">
                Enroll now!
              </Button>
              <Button className="action-btn" icon="calendar">
                Schedule for later
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="deck-details__body">
        <h4 className="description-title">Description</h4>
        <div className="deck-description">{description}</div>
      </div>
      <div className="deck-details__footer">
        <div className="icons-container">
          <DeckDetail
            ImgComponent={ProgrammingImg}
            title="Programming"
            description="Learn algorithms, data structures and programming languages"
          />
          <DeckDetail
            ImgComponent={CardSetImg}
            title="30 cards"
            description="In this deck, you can found out 30 of card sets"
          />
          <DeckDetail
            ImgComponent={LanguageImg}
            title="Language"
            description="This deck supports English language"
          />
        </div>
      </div>
    </div>
  );
};
