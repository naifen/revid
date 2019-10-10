import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer: React.FC<{ videoOptions: videojs.PlayerOptions }> = ({
  videoOptions
}) => {
  const videoNode = useRef(null);

  useEffect(() => {
    const player = videojs(videoNode.current, videoOptions, function() {
      console.log("Player is now ready");
    });

    return () => player.dispose();
  }, [videoOptions]);

  return (
    <div className="revid-player">
      <div data-vjs-player>
        <video ref={videoNode} className="video-js"></video>
      </div>
    </div>
  );
};

export default VideoPlayer;
