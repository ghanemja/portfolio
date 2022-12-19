import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useDrag, useHover } from "@use-gesture/react";
import * as THREE from "three";
import { TextureLoader } from "three";
import home from "../../images/main_screen.jpg";
import research from "../../images/research.jpg";
import patents from "../../images/patents.jpg";
import conferences from "../../images/conferences.jpg";
import publications from "../../images/publication.jpg";
import about from "../../images/GeneralAbout.jpg";
import hobbies from "../../images/hobbies.jpg";
import skills from "../../images/skills.jpg";
import chase from "../../images/jpmorgan.jpg";
import pc from "../../images/pc.jpg";
import volunteer from "../../images/Group 10volunteering.jpg";
import contact from "../../images/contact.jpg";
import Renderer from "../Experience/Renderer";

function Model(props, ref) {
  const [nav, setNav] = React.useState(home);
  const [page, setPage] = React.useState("home");
  const robot = useRef();
  const [position, setPosition] = React.useState([10, 2, 5]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  const { nodes, materials } = useGLTF("/models/robot-nav-flipped-screen1.glb");
  
const texture = useLoader(TextureLoader, nav);
// document.body.addEventListener( 'mousemove', ( e )=>{
//     controls.handleMouseMoveRotate( e ) 
// });
function switchImage(buttonPressed) {
    console.log("button is pressed")
    setNav(buttonPressed);
    const texture = useLoader(TextureLoader, nav);
}

  return (
    <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["Robot base"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials["Robot second"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials["Robot third"]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials.Black}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.aboutMeButton.geometry}
            onClick={(e) => {
                setPage("about");
                switchImage(about)
            }}
            position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.innovationButton.geometry}
            onClick={(e) => {
                if (page == "contact") {
                    window.open("mailto:janghanem@gmail.com?subject=Inquiry");
                } else {
                    setPage("innovation");
                    switchImage(patents)
                }
            }}
            position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.volunteeringButton.geometry}
            onClick={(e) => {
                if (page == "contact") {
                    window.open("https://www.linkedin.com/in/janelle-ghanem/");
                } else {
                    setPage("volunteering");
                    switchImage(volunteer)
                }
            }}
            position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.contactButton.geometry}
            onClick={(e) => {
                setPage("contact");
                switchImage(contact)
            }}
            position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.industryButton.geometry}
            onClick={(e) => {
                setPage("industry")
                switchImage(chase)
            }}
            position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
          <mesh
        castShadow
        receiveShadow
        geometry={nodes.PatentsButton.geometry}
        material={materials["Robot base"]}
        onClick={(e) => {
            if (page == "innovation") {
                switchImage(patents)
            } else if (page == "about") {
                switchImage(about)
            } else if (page == "industry") {
                switchImage(chase)
            }
        }}
        position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PublicationsButton.geometry}
        // material={materials.transparent}
        position={[-1.31, 0, -11.26]}
        onClick={(e) => {
            if (page == "innovation") {
                switchImage(publications)
            } else if (page == "about") {
                switchImage(hobbies)
            } else if (page == "industry") {
                switchImage(pc)
            }
        }}
        scale={[1, 1, 1.32]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ConferencesButton.geometry}
        // material={materials.transparent}
        onClick={(e) => {
            console.log("conference click")
            console.log(page)
            if (page == "innovation") {
                switchImage(conferences)
            } else if (page == "about") {
                switchImage(skills)
            }
        }}
        position={[-1.31, 0, -19.43]}
        scale={[1, 1, 1.27]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ResearchButton.geometry}
        // material={materials.transparent}
        onClick={(e) => {
            switchImage(research)
        }}
        position={[-1.31, 0, -23.29]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackButton.geometry}
        onClick={(e) => {
            switchImage(home)
        }}
        // material={materials.publications}
        position={[-1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>

        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Screen.geometry}
            // material={materials.main_screen}
            position={[1.31, 0, 0]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
    </group>
  );
}

useGLTF.preload("/models/robot-nav-flipped-screen1.glb");
export default forwardRef(Model);