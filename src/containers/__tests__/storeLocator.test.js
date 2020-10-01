import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", () => {
  let mountedStoreLocator;
  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<StoreLocator />, div);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(2);
  });

  it("renders the map", () => {
    const maps = mountedStoreLocator.find("SoloMap");
    expect(maps.length).toBe(1);
  });
});
