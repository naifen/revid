import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import App from "./App";
import VideoPlayer from "./components/VideoPlayer";

it("renders elements and components without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".App")).to.have.lengthOf(1);
  expect(wrapper.find(VideoPlayer)).to.have.lengthOf(1);
});
