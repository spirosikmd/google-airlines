import React from 'react';
import Image from 'react-graceful-image';
import { AirlineData } from './airlines';

const Airline = ({ airline }: { airline: AirlineData }) => (
  <div
    className="p-6 m-2 border border-solid rounded-full border-gray-200  hover:border-purple-600"
    data-tip={airline.airline}
    tabIndex={0}
  >
    <Image
      src={`//www.gstatic.com/flights/airline_logos/70px/${airline.iata}.png`}
      height="35"
      width="35"
      alt={airline.airline}
      placeholderColor="#E5FCF5"
      noRetry={true}
    />
  </div>
);

export default Airline;
