import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

test('renders learn header component', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/This is the header/i);
    expect(linkElement).toBeInTheDocument();
  });