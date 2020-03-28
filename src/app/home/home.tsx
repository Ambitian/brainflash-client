import React from 'react';
import { CategoryContainer } from '../category-container/category-container';
import { Topbar } from '../topbar/topbar';

export const Home = () => {
  return (
    <div className="home" style={{ height: '100vh', display: 'flex' }}>
      <CategoryContainer />
      <div className="content" style={{ width: '100%' }}>
        <Topbar />
      </div>
    </div>
  );
};
