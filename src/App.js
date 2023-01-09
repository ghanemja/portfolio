import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import RobotScene from "./components/NavRobot/Robot.js";
import CustomizedDialogs from "./components/Experience/Dialog";
import Experience from './components/Experience/Experience';
import ReactGA from 'react-ga';

function App() {
  
  const [experience, setExperience] = React.useState(null);
  
  React.useEffect(() => {
     setExperience(new Experience(document.querySelector(".experience-canvas")));
  }, []);

  const TRACKING_ID = "UA-252534935-1";
  ReactGA.initialize(TRACKING_ID);

  const useAnalyticsEventTracker = (category="Portfolio") => {
    const eventTracker = (action = "accessSite", label = "user has accessed site") => {
      ReactGA.event({category, action, label});
    }
    return eventTracker;
  }

  const gaEventTracker = useAnalyticsEventTracker('Home');

  window.addEventListener('load', (event) => {
      gaEventTracker('pastLoader');
  });

  return (
    <div className="App" >
        <div>
            <CustomizedDialogs />
            <div className="experience">
              <canvas className="experience-canvas"/>
            </div> 
            <RobotScene experience={experience} />
        </div> 
    </div>
  )

}

export default App;
