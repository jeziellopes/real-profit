import { render } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders real profit application title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/real profit/i);
  expect(linkElement).toBeInTheDocument();
});
