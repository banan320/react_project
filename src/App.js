import { useState } from "react";
import "./App.css";

function Menu({ onSelectVideo, videoValues }) {
  return (
    <form onClick={(event) => onSelectVideo(event.target.value)}>
      {videoValues.map((value, i) => (
        <div className="video-inputs">
          <input key={i} type="radio" name="src" value={value} />
          {value}
        </div>
      ))}
    </form>
  );
}

function Video({ videoSrc }) {
  return (
    <div>
      <video
        loop
        controls
        autostart="true"
        autoPlay
        muted
        src={videoSrc}
      ></video>
    </div>
  );
}

const videos = {
  deer: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4",
  snail:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4",
  cat: "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4",
  spider:
    "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4",
};

const videoNames = Object.keys(videos);

function App() {
  const [videoSrc, setVideoSrc] = useState(videos.deer);

  function onSelectVideo(video) {
    const videoSrc = videos[video];
    setVideoSrc(videoSrc);
  }

  return (
    <div>
      <h1>Video Player</h1>
      <Menu onSelectVideo={onSelectVideo} videoValues={videoNames} />
      <Video videoSrc={videoSrc} />
    </div>
  );
}

export default App;
