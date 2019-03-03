import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Info from '../Info';

afterEach(cleanup);

test('renders info', () => {
  const { asFragment } = render(<Info />);

  expect(asFragment()).toMatchSnapshot();
});
