import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Info from '../Info';

afterEach(cleanup);

test('renders info', () => {
  const { asFragment } = render(<Info />);

  expect(asFragment()).toMatchSnapshot();
});
