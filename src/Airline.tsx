import React from 'react';
import { AirlineData } from './airlines';

const Airline = ({ airline }: { airline: AirlineData }) => (
  <div className="app__airline" data-tip={airline.airline} tabIndex={0}>
    <img
      height="35"
      width="35"
      src={`//www.gstatic.com/flights/airline_logos/70px/${airline.iata}.png`}
    />
  </div>
);

export default Airline;
