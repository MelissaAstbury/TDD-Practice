import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';

describe('StoreLocator', () => {

let mountedStoreLocator;
beforeEach(() => {
  mountedStoreLocator = shallow(<StoreLocator/>);
});

it("renders without crashing", () => {
  let mountedStoreLocator = shallow(<StoreLocator />);
});

it("renders a header", () => {
  const headers = mountedStoreLocator.find("Header");
  expect(headers.length).toBe(1);
});

it("renders two buttons", () => {
  const buttons = mountedStoreLocator.find("Button");
  expect(buttons.length).toBe(2);
})

it("renders the map", () => {
  const maps = mountedStoreLocator.find("SoloMap");
  expect(maps.length).toBe(1);
})
  // const { getByText } = render(<StoreLocator />);
  // const linkElement = getByText(/This is the Store Locator/i);
  // expect(linkElement).toBeInTheDocument();
});