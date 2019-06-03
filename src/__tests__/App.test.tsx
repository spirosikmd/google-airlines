import React from 'react';
import { render, cleanup, waitForElement } from 'react-testing-library';
import App from '../App';

beforeEach(() => {
  fetchMock.resetMocks();
});

afterEach(cleanup);

const airlines = [
  { id: 'iata1_airline1', iata: 'iata1', airline: 'airline1' },
  { id: 'iata2_airline2', iata: 'iata2', airline: 'airline2' }
];

test('renders the app with info and a list of airlines', async () => {
  fetchMock.mockResponse(JSON.stringify(airlines));

  const { getByTestId } = render(<App />);

  const resolved = await waitForElement(() => getByTestId('resolved'));

  expect(resolved).toMatchSnapshot();
});
