import React from 'react';
import { Spin } from 'antd';

import './loading-container.scss';

interface LoadingContainerProps {
  text?: string;
}

export const LoadingContainer = ({
  text = 'Loading...',
}: LoadingContainerProps) => {
  return (
    <div className="loading-container">
      <Spin size="large" />
      <h3 className="loading-text">{text}</h3>
    </div>
  );
};
