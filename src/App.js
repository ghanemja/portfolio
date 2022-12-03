import "./App.css";
import React, { useEffect } from "react";
import Experience from "./components/Experience/Experience";

function App() {
  useEffect(() => {
    const experience = new Experience(document.querySelector(".experience-canvas"));
  });

  return (
    <div className="App">
      <div className="experience">
        <canvas className="experience-canvas" />
      </div>
    </div>
  );
}

export default App;
