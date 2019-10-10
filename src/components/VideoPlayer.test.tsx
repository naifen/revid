import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import VideoPlayer from "./VideoPlayer";

const sampleVideoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "video/mp4"
    }
  ]
};

it("renders without crashing", () => {
  const wrapper = shallow(<VideoPlayer videoOptions={sampleVideoOptions} />);
  expect(wrapper.find(".revid-player")).to.have.lengthOf(1);
  expect(wrapper.find("video")).to.have.lengthOf(1);
});
