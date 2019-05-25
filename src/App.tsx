import React from 'react';
import ReactTooltip from 'react-tooltip';
import AirlineList from './AirlineList';
import Info from './Info';
import { AirlineData } from './airlines';

const App = ({ airlines }: { airlines: AirlineData[] }) => (
  <div className="font-sans p-6">
    <Info />
    <AirlineList airlines={airlines.slice(0, 20)} />
    <ReactTooltip place="top" effect="solid" />
  </div>
);

export default App;
