import "./App.css";
import React, { useEffect, useRef } from "react";
import Experience from "./components/Experience/Experience";
import starsVideo from "./components/utils/videos/file.mp4"

function App() {
  useEffect(() => {
    const experience = new Experience(document.querySelector(".experience-canvas"));
  });

  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.8;
  };

  return (
    <div className="App">
      <div class="wrapper">
      <video 
        ref={videoRef} 
        onCanPlay={() => setPlayBack()} 
        autoPlay muted loop id="videoBackground"
        
      >
          <source src={starsVideo} type="video/mp4"/>
      </video>
      </div>
      <div className="experience">
        <canvas className="experience-canvas" />
      </div>
    </div>
  );
}

export default App;
