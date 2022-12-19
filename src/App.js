import "./App.css";
import React, { useEffect, useRef } from "react";
import Experience from "./components/Experience/Experience";
import RobotScene from "./components/NavRobot/Robot.js";
import starsVideo from "./components/utils/videos/file.mp4"

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
      <div className="header">
        <h1>Under Construction. Feel free to navigate on the robot, or drag, shift + drag, and zoom into the space station, but come back for updates!</h1>
      </div>
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
