import React from 'react';

const Info = () => (
  <>
    <h1 className="app__title">Google Airlines</h1>
    <p className="app__info">
      Google created their own airline logos for{' '}
      <a
        href="https://www.google.com/flights"
        target="_blank"
        className="app__anchor"
      >
        google flights
      </a>{' '}
      for many airlines out there. This is a collection of a few of them in a
      random order. I got the IATA codes from{' '}
      <a
        href="https://en.wikipedia.org/wiki/List_of_airline_codes"
        target="_blank"
        className="app__anchor"
      >
        wikipedia
      </a>
      . Enjoy!
    </p>
  </>
);

export default Info;
