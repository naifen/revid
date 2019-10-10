import React from "react";
import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";

const sampleVideoOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      // src: "https://www.w3schools.com/html/mov_bbb.mp4",
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      type: "video/mp4"
    }
  ]
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <VideoPlayer videoOptions={sampleVideoOptions} />
      </section>
    </div>
  );
};

export default App;
