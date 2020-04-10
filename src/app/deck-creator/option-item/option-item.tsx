import React from 'react';

import './option-item.scss';

interface OptionItemProps {
  numberOrder: number;
  title: string;
  description: string;
  active?: boolean;
}

export const OptionItem = ({
  numberOrder,
  title,
  description,
  active = false,
}: OptionItemProps) => {
  return (
    <div className={`option-item ${active ? 'option-item--active' : ''}`}>
      <div className="item-number-order">{numberOrder}</div>
      <div className="option-details">
        <h4 className="option-title">{title}</h4>
        <p className="option-description">{description}</p>
      </div>
    </div>
  );
};
