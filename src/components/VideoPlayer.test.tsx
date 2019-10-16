import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";
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

const handler = {
  handleTime: (time: number) => console.log(time)
};

it("renders without crashing", () => {
  const wrapper = shallow(
    <VideoPlayer videoOptions={sampleVideoOptions} videoHandler={handler} />
  );
  expect(wrapper.find(".revid-player")).to.have.lengthOf(1);
  expect(wrapper.find("video")).to.have.lengthOf(1);
});

it("renders a button show current time", () => {
  const onButtonClick = sinon.spy();
  handler.handleTime = onButtonClick;
  const wrapper = shallow(
    <VideoPlayer videoOptions={sampleVideoOptions} videoHandler={handler} />
  );
  expect(wrapper.find("button")).to.have.lengthOf(1);
  expect(wrapper.find("button").text()).to.equal("Log current time");
  wrapper.find("button").simulate("click");
  // FIXME:     TypeError: Cannot read property 'currentTime' of null
  expect(onButtonClick).to.have.property("callCount", 1);
});
