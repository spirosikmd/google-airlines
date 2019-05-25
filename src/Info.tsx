import React from 'react';
import Anchor from './Anchor';

const Info = () => (
  <>
    <h1 className="text-4xl font-medium">Google Airlines</h1>
    <p className="max-w-2xl text-gray-600">
      Google created their own airline logos for{' '}
      <Anchor href="https://www.google.com/flights">google flights</Anchor> for
      many airlines out there. This is a collection of a few of them in a random
      order. I got the IATA codes from{' '}
      <Anchor href="https://en.wikipedia.org/wiki/List_of_airline_codes">
        wikipedia
      </Anchor>
      . Enjoy!
    </p>
  </>
);

export default Info;
