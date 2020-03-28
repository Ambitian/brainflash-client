import React from 'react';
import { Input } from 'antd';

import './search-bar.scss';

export const SearchBar = () => {
  const onSearch = (value: string) => {
    // TODO: Implement search feature
  };

  return (
    <Input.Search
      className="search-bar"
      placeholder="Type for what are You looking for..."
      onSearch={onSearch}
    />
  );
};
