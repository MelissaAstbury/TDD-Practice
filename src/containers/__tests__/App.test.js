import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App", () => {

  it('renders learn react link', () => {
    let mountedApp = shallow(<App />);
    // const linkElement = mountedApp(/This is the app/i);
    // expect(linkElement).toBeInTheDocument();
  });

  it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find("StoreLocator");
    expect(locators.length).toBe(1);
  });



});


