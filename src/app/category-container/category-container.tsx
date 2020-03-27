import React from 'react';
import { UserDropdown } from '../user-dropdown/user-dropdown';

import logo from '../../assets/images/logo.svg';

import './category-container.scss';

export const CategoryContainer = () => {
  // TODO: Implement logic
  return (
    <div className="category-container">
      <div className="inner-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo__img" />
          <h2 className="logo__text">Brainflash</h2>
        </div>
        <h3 className="title">Explore</h3>
        <ul className="category-list">
          <li className="category category--active">Programming</li>
          <li className="category">Business</li>
          <li className="category">Computer Science</li>
          <li className="category">Information Technology</li>
          <li className="category">Health</li>
          <li className="category">Math & Logic</li>
          <li className="category">Personal Development</li>
          <li className="category all-categories">Explore All!</li>
        </ul>
      </div>
      <UserDropdown />
    </div>
  );
};
