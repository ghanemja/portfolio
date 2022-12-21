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
  const [animate, setAnimate] = React.useState(false)
  window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });

  const typeStyle2 = { whiteSpace: "pre-line", fontFamily: "'Press Start 2P', monospace", color: "white", textAlign: "start",  paddingTop: "0.5em", fontSize: '1em',  marginRight: "auto" };

  return (
    <div className="App" >
        { visible ? 
          <>
            <div 
             className={
              animate ? 'loader-after' : 'loader'
            }
            >
              {/* <CustomLoad isVisible={ this.state.visible}/> */}
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
                  speed={72}
                  cursor={false}
                  repeat={0}
                  style={typeStyle}
                  />
                  <TypeAnimation
                  sequence={['', 3100,
                            'Cloning into \'mtv-welcome-to-my-crib\'...', 
                            () => {}
                            ]}
                  wrapper="div"
                  speed={99}
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 4500, 'remote: Enumerating objects: 15, done.', 
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  speed={99}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 5500,'remote: Counting objects: 100% (15/15), done.',
                            () => {}
                            ]}
                  wrapper="div"
                  speed={99}
                  cursor={false}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 6500, 'remote: Total 15 (delta 1), reused 11 (delta 0), pack-reused 0',
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  speed={99}
                  repeat={0}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={[
                            '', 7500, 'Unpacking objects: 100% (15/15), done.',  
                            () => {}
                            ]}
                  wrapper="div"
                  cursor={false}
                  repeat={0}
                  speed={80}
                  style={typeStyle2}
                  />
                  <TypeAnimation
                  sequence={['', 9500,
                            'jan-ghanem ~ % cd mtv-welcome-to-my-crib', // Waits 2s
                            ]}
                  wrapper="div"
                  cursor={false}
                  speed={60}
                  repeat={0}
                  style={typeStyle}
                  />
                  <TypeAnimation
                  sequence={['', 11500,
                            'jan-ghanem@mtv-welcome-to-my-crib ~ % ls', 50, () => {}
                            , () => {
                              setAnimate(true);
                              setTimeout(() => {
                                setVisible(false);
                              }, 1000)
                              console.log(visible)
                              console.log(animate)

                            }
                            ]}
                  wrapper="div"
                  cursor={true}
                  speed={50}
                  repeat={0}
                  style={typeStyle}
                  />
              </div>  
            </div>
          </>
        : 
        <div>
           <video 
        ref={videoRef} 
        onCanPlay={() => setPlayBack()} 
        autoPlay muted loop id="videoBackground"
      >
          <source src={starsVideo} type="video/mp4"/>
      </video>
            <CustomizedDialogs />
            <div className="experience">
              <canvas className="experience-canvas" />
            </div> 
            <RobotScene />
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
