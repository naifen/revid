import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoPlayer: React.FC<{
  videoOptions: videojs.PlayerOptions;
  videoHandler: { handleTime(time: number): void };
}> = ({ videoOptions, videoHandler }) => {
  const videoNode = useRef(null);
  // store videojs player object in ref object to persist between re-renders
  const player = useRef<videojs.Player | null>(null);

  useEffect(() => {
    player.current = videojs(videoNode.current, videoOptions, function() {
      console.log("Player is now ready");
    });

    return () => player.current!.dispose();
  }, [videoOptions]);

  return (
    <div className="revid-player">
      <div data-vjs-player>
        <video ref={videoNode} className="video-js"></video>
      </div>
      <button
        onClick={e => videoHandler.handleTime(player.current!.currentTime())}
      >
        Log current time
      </button>
    </div>
  );
};

export default VideoPlayer;
