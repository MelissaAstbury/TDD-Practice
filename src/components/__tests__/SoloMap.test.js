import React from 'react';
import { render } from '@testing-library/react';
import SoloMap from '../SoloMap';

test('renders learn header component', () => {
    const { getByText } = render(<SoloMap />);
    const linkElement = getByText(/This is the map/i);
    expect(linkElement).toBeInTheDocument();
  });