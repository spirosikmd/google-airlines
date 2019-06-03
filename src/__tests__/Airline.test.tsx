import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Airline from '../Airline';

afterEach(cleanup);

test('renders an airline with image', () => {
  const airline = { id: 'id', iata: 'iata', airline: 'airline' };
  const { asFragment } = render(<Airline airline={airline} />);

  expect(asFragment()).toMatchSnapshot();
});
