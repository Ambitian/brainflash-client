import React from 'react';

import noDataImg from '../../assets/images/no-data.svg';

import './no-data.scss';

interface NoDataProps {
  text?: string;
}

export const NoData = ({ text = 'No Data' }: NoDataProps) => {
  return (
    <div className="no-data-container">
      <img src={noDataImg} alt="No Data" className="no-data-img" />
      <h3 className="no-data-text">{text}</h3>
    </div>
  );
};
