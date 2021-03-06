import React from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("Button", () => {
  let mountedButton;

  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashing", () => {
    shallow(<Button />);
  });

  it("renders a button", () => {
    const button = mountedButton.find("button");
    expect(button.length).toBe(1);
  });
});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: "Location1",
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location", () => {
    const locationName = mountedButton.find(".location-btn");
    expect(locationName.text()).toEqual("Location1");
  });
});

describe("When a location is passed to it", () => {
  let mountedButton;
  let props;

  beforeEach(() => {
    props = {
      location: undefined,
    };

    mountedButton = shallow(<Button {...props} />);
  });

  it("displays the location including no param being passed", () => {
    const locationName = mountedButton.find(".location-btn");
    expect(locationName.text()).toEqual("All Locations");
  });
});
