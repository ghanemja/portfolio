import "./App.css";
import React, { useEffect, useRef } from "react";
import Experience from "./components/Experience/Experience";
import RobotScene from "./components/NavRobot/Robot.js";
import starsVideo from "./components/utils/videos/file.mp4"
import CustomizedDialogs from "./components/Experience/Dialog";

function App() {
  useEffect(() => {
    const experience = new Experience(document.querySelector(".experience-canvas"));
  });

  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 1.2;
  };

  return (
    <div className="App">
      <CustomizedDialogs />
      <RobotScene/>
      {/* <video 
        ref={videoRef} 
        onCanPlay={() => setPlayBack()} 
        autoPlay muted loop id="videoBackground"

      >
          <source src={starsVideo} type="video/mp4"/>
      </video> */}
      {/* </div> */}
      <div className="experience">
        <canvas className="experience-canvas" />
      </div>
    </div>
  );
}

export default App;
