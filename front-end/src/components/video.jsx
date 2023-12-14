import React from "react";
import YouTube from "react-youtube";
const Video = () => {
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };
  return <YouTube videoId={"5KZExVcsWwQ"} opts={opts} />;
};

export default Video;
