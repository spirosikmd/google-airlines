import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AirlineList from '../AirlineList';

afterEach(cleanup);

test('renders a list of airlines', () => {
  const airlines = [
    { id: 'iata1_airline1', iata: 'iata1', airline: 'airline1' },
    { id: 'iata2_airline2', iata: 'iata2', airline: 'airline2' }
  ];

  const { asFragment } = render(<AirlineList airlines={airlines} />);

  expect(asFragment()).toMatchSnapshot();
});
