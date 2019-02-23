import React, { Component } from 'react';
import ReactTooltip from 'react-tooltip';
import AirlineList from './AirlineList';
import Info from './Info';
import { AIRLINES } from './airlines';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Info />
        <AirlineList airlines={AIRLINES} />
        <ReactTooltip place="top" effect="solid" />
      </div>
    );
  }
}

export default App;
