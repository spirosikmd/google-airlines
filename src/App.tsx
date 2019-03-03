import React from 'react';
import ReactTooltip from 'react-tooltip';
import AirlineList from './AirlineList';
import Info from './Info';
import './App.css';
import { AirlineData } from './airlines';

const App = ({ airlines }: { airlines: AirlineData[] }) => (
  <div className="app">
    <Info />
    <AirlineList airlines={airlines} />
    <ReactTooltip place="top" effect="solid" className="app__tooltip" />
  </div>
);

export default App;
