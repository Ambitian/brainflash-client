import React, { Component } from 'react';
import { AppRoutes } from '../routing/app-routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppRoutes />
      </div>
    );
  }
}

export default App;
