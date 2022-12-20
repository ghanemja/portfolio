import { type } from "@testing-library/user-event/dist/type";
import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Typewriter from "typewriter-effect";
import CustomizedDialogs from "../Experience/Dialog";
import RobotScene from "../NavRobot/Robot";

export default function CustomLoad() {

    useEffect(() => {
        // const experience = new Experience(document.querySelector(".experience-canvas"));
      });

    const [visible, setVisible] = React.useState(true)



    const [text, setText] = React.useState(true)
    const lines = [
        "jan-ghanem ~ %",
        "jan-ghanem ~ % git clone https://github.com/ghanemja/mtv-welcome-to-my-crib",
        "Cloning into \'mtv-welcome-to-my-crib\'...",
        "remote: Enumerating objects: 15, done.",
        "remote: Counting objects: 100% (15/15), done.",
        "remote: Total 15 (delta 1), reused 11 (delta 0), pack-reused 0",
        "Unpacking objects: 100% (15/15), done.",
        "jan-ghanem ~ % cd mtv-welcome-to-my-crib",
        "jan-ghanem@mtv-welcome-to-my-crib ~ % ls"
    ];
    // const [fullText, setFullText] = React.useState("")
    // const [index, setIndex] = React.useState(0)

    // useEffect(() => {
    //     for (let line in lines) {
    //         console.log(line)
    //         setFullText(line)
    //         if (index < fullText.length) {
    //             console.log(text + fullText[index])
    //             setTimeout(() => {
    //               setText(text + fullText[index])
    //               setIndex(index + 1)
    //             }, 40)
    //           }
    //     }
    //   }, [index])

    const typeStyle = { whiteSpace: "pre-line", fontFamily: "'Press Start 2P', monospace", color: "green", textAlign: "start",  paddingTop: "0.5em", fontSize: '1em',  marginRight: "auto" };
    const typeStyle2 = { whiteSpace: "pre-line", fontFamily: "'Press Start 2P', monospace", color: "white", textAlign: "start",  paddingTop: "0.5em", fontSize: '1em',  marginRight: "auto" };

    return (
        <div>
        { visible ? 
        <>
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
        </div>
    );
}
