import React from 'react';
import { render, cleanup } from 'react-testing-library';
import App from '../App';

afterEach(cleanup);

const airlines = [
  { id: 'iata1_airline1', iata: 'iata1', airline: 'airline1' },
  { id: 'iata2_airline2', iata: 'iata2', airline: 'airline2' }
];

test('renders the app with info and a list of airlines', () => {
  const { asFragment } = render(<App airlines={airlines} />);

  expect(asFragment()).toMatchSnapshot();
});
