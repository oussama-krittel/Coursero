import YouTube from 'react-youtube';
export function Main() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          autoplay: 0,
        },
      };
    return (
    <div className="w-8/12 bg-slate-300 m-2 overflow-y-scroll overflow-x-hidden hideScroll">
    <div>
      <YouTube videoId={"k5tICunelSU"} opts={opts} />
    </div>
    </div>
    );
  }