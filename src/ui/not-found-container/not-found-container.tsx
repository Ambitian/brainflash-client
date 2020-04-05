import React from 'react';

import notFoundImg from '../../assets/images/no-found.svg';

import './not-found-container.scss';

interface NotFoundContainerProps {
  text?: string;
}

export const NotFoundContainer = ({
  text = 'Not Found',
}: NotFoundContainerProps) => {
  return (
    <div className="not-found-container">
      <img src={notFoundImg} alt="Not found" className="not-found-img" />
      <h3 className="not-found-text">{text}</h3>
    </div>
  );
};
