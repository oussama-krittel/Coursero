import React from "react";
import YouTube from "react-youtube";
const Video = ({ video_id }) => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={video_id} opts={opts} />;
};

export default Video;
