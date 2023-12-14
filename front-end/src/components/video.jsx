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
  return (
    <div>
      <YouTube videoId={"5KZExVcsWwQ"} opts={opts} />
    </div>
  );
};

export default Video;
