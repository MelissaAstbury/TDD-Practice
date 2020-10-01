import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Header from "../Header";

describe("Header", () => {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
  });

  it("renders a logo", () => {
    expect(mountedHeader.find("img").prop("src")).toEqual("images/logo.png");
  });
});
