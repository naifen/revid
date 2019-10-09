import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import logo from "./logo.svg";
import "./App.css";

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      type: "video/mp4"
    }
  ]
};

const App: React.FC = () => {
  const videoNode = useRef(null);

  useEffect(() => {
    const player = videojs(videoNode.current, videoJsOptions, function() {
      console.log("Player is now ready!");
    });

    return () => player.dispose();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <div data-vjs-player>
          <video ref={videoNode} className="video-js"></video>
        </div>
      </section>
    </div>
  );
};

export default App;
