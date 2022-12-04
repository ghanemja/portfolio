import "./App.css";
import React, { useEffect } from "react";
import Experience from "./components/Experience/Experience";
import starsVideo from "./components/utils/videos/purple-star.mp4"

function App() {
  useEffect(() => {
    const experience = new Experience(document.querySelector(".experience-canvas"));
  });

  return (
    <div className="App">
      <video autoPlay muted loop id="videoBackground">
        <source src={starsVideo} type="video/mp4"/>
      </video>
      <div className="experience">
        <canvas className="experience-canvas" />
      </div>
    </div>
  );
}

export default App;
