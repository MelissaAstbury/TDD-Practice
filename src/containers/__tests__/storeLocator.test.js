import React from 'react';
import { render } from '@testing-library/react';
import StoreLocator from '../StoreLocator';

test('renders learn react link', () => {
  const { getByText } = render(<StoreLocator />);
  const linkElement = getByText(/This is the Store Locator/i);
  expect(linkElement).toBeInTheDocument();
});