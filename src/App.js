import React from 'react';
import './App.css';

import CustomRoutes from './config/CustomRoutes';
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <CustomRoutes />
      </div>
    );
  }
}

export default App;
