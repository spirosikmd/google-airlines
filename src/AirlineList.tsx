import React from 'react';
import Airline from './Airline';
import { AirlineData } from './airlines';

const AirlineList = ({ airlines }: { airlines: AirlineData[] }) => (
  <div className="app__airlines">
    <div className="app__airline-list">
      {airlines.map(airline => (
        <Airline key={airline.id} airline={airline} />
      ))}
    </div>
  </div>
);

export default AirlineList;
