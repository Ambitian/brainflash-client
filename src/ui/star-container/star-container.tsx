import React from 'react';

import { ReactComponent as StarImg } from '../../assets/images/star.svg';

import './star-container.scss';

interface StarContainerProps {
  activeStarCount: number;
  size?: number;
}

export const StarContainer = ({
  activeStarCount,
  size = 30,
}: StarContainerProps) => {
  return (
    <div className="star-container">
      {[...Array(5)].map((_, index) => (
        <StarImg
          key={`star-${index}`}
          style={{ width: `${size}px`, height: `${size}px` }}
          className={`star ${
            index + 1 <= activeStarCount ? 'star--active' : ''
          }`}
        />
      ))}
    </div>
  );
};
