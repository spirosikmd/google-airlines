import React from 'react';
import ReactTooltip from 'react-tooltip';
import AirlineList from './AirlineList';
import Info from './Info';
import { AirlineData } from './airlines';

const App = () => {
  const [airlines, setAirlines] = React.useState<AirlineData[]>([]);

  React.useEffect(() => {
    fetch('.netlify/functions/getAirlines')
      .then(response => response.json())
      .then(airlineData => {
        setAirlines(airlineData);
        ReactTooltip.rebuild();
      });
  }, []);

  return (
    <div className="font-sans p-6" data-testid="resolved">
      <Info />
      <AirlineList airlines={airlines} />
      <ReactTooltip place="top" effect="solid" />
    </div>
  );
};

export default App;
