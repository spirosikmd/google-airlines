import React from 'react';
import Airline from './Airline';
import { AirlineData } from './airlines';

const AirlineList = ({ airlines }: { airlines: AirlineData[] }) => (
  <div className="pt-6">
    <div className="flex flex-wrap">
      {airlines.map(airline => (
        <Airline key={airline.id} airline={airline} />
      ))}
    </div>
  </div>
);

export default AirlineList;
