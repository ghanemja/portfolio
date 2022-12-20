import "./App.css";
import React, { useEffect, useRef } from "react";
import RobotScene from "./components/NavRobot/Robot.js";
import starsVideo from "./components/utils/videos/file.mp4"
import CustomizedDialogs from "./components/Experience/Dialog";
import CustomLoad from "./components/Loader/Loader";
import { TypeAnimation } from 'react-type-animation';
import Experience from './components/Experience/Experience';

function App() {
  useEffect(() => {
    if (!visible) {
      const experience = new Experience(document.querySelector(".experience-canvas"));
    }
  });

  const videoRef= useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 1.2;
  };
  const typeStyle = { whiteSpace: "pre-line", fontFamily: "'Press Start 2P', monospace", color: "green", textAlign: "start",  paddingTop: "0.5em", fontSize: '1em',  marginRight: "auto" };
  const [visible, setVisible] = React.useState(true)
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  const typeStyle2 = { whiteSpace: "pre-line", fontFamily: "'Press Start 2P', monospace", color: "white", textAlign: "start",  paddingTop: "0.5em", fontSize: '1em',  marginRight: "auto" };

  return (
    <div className="App" >
        { visible ? 
          <>
            <div className="loader">
              <div className="fakeMenu">
                    <span style={{backgroundColor: "#ff3b47", borderColor: "#9d252b"}} className="dot"></span>
                    <span style={{backgroundColor: "#00d742", borderColor: "#049931"}} className="dot"></span>
                    <span style={{backgroundColor: "#ffc100", borderColor: "#9d802c"}} className="dot"></span>
                </div>
                <div className="fakeScreen">            
                  <TypeAnimation
                  sequence={[
                              'jan-ghanem ~ %', 500, 'jan-ghanem ~ % git clone https://github.com/ghanemja/mtv-welcome-to-my-crib', 500
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle}
                  />
                  <TypeAnimation
                  sequence={['', 6000,
                            'Cloning into \'mtv-welcome-to-my-crib\'...', 
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 8000, 'remote: Enumerating objects: 15, done.', 
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 12000,'remote: Counting objects: 100% (15/15), done.',
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 15000, 'remote: Total 15 (delta 1), reused 11 (delta 0), pack-reused 0',
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 18000, 'Unpacking objects: 100% (15/15), done.',  
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={['', 21000,
                            'jan-ghanem ~ % cd mtv-welcome-to-my-crib', // Waits 2s
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  style={typeStyle}
                  />
                  <TypeAnimation
                  sequence={['', 24000,
                            'jan-ghanem@mtv-welcome-to-my-crib ~ % ls', () => {}
                            , () => {
                              setVisible(false)
                            }
                            ]}
                  wrapper="div"
                  cursor={true}
                  repeat={0}
                  style={typeStyle}
                  />
              </div>  
            </div>
          </>
        : 
        <div>
            <CustomizedDialogs />
            <RobotScene />
            <div className="experience">
              <canvas className="experience-canvas" />
            </div> 
        </div> 
        }
          {/* <div className="loader">
            <CustomLoad />
          </div> */}
      {/* <CustomizedDialogs /> */}
      {/* <RobotScene /> */}
      {/* <div className="experience">
        <canvas className="experience-canvas" />
      </div>  */}
    </div>
  )

}

export default App;
