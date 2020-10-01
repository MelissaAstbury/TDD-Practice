import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import SoloMap from "../SoloMap";

describe("SoloMap", () => {
  let mountedSoloMap;
  beforeEach(() => {
    mountedSoloMap = shallow(<SoloMap />);
  });

  it("renders without crashing", () => {
    shallow(<SoloMap />);
  });

  it("contains an image", () => {
    const img = mountedSoloMap.find("img");
    expect(img.length).toBe(1);
  });

  it("displays the none map when no params are given", () => {
    expect(mountedSoloMap.find("img").prop("src")).toEqual("images/photo1.png");
  });
});
