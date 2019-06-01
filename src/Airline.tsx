import React from 'react';
import Image from 'react-graceful-image';
import { AirlineData } from './airlines';

const Airline = ({ airline }: { airline: AirlineData }) => (
  <div
    className="p-6 m-2 h-20 w-20 border border-solid rounded-full border-gray-200 hover:border-purple-600 flex items-center justify-center"
    data-tip={airline.airline}
    tabIndex={0}
  >
    <Image
      src={`//www.gstatic.com/flights/airline_logos/70px/${airline.iata}.png`}
      alt={airline.airline}
      placeholderColor="#E5FCF5"
      noRetry={true}
      className="max-w-full"
    />
  </div>
);

export default Airline;
