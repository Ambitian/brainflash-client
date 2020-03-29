import React from 'react';
import { CategoryContainer } from '../category-container/category-container';
import { Topbar } from '../topbar/topbar';
import { HomeContent } from './home-content/home-content';
import { DeckListStateProvider } from '../../providers/deck-list.provider';

export const Home = () => {
  return (
    <DeckListStateProvider>
      <div className="home" style={{ height: '100vh', display: 'flex' }}>
        <CategoryContainer />
        <div className="content" style={{ width: '100%' }}>
          <Topbar />
          <HomeContent />
        </div>
      </div>
    </DeckListStateProvider>
  );
};
