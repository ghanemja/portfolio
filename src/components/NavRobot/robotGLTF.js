import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useDrag } from "@use-gesture/react";
import * as THREE from "three";
import { TextureLoader } from "three";
import home from "../../images/main_screen.jpg";
import research from "../../images/research.jpg";
import patents from "../../images/patents.jpg";
import conferences from "../../images/conferences.jpg";
import publications from "../../images/publications.jpg";
import about from "../../images/about.jpg";
import hobbies from "../../images/hobbies.jpg";
import skills from "../../images/skills.jpg";
import chase from "../../images/jpmorgan.jpg";
import pc from "../../images/pc.jpg";
import volunteer from "../../images/volunteer.jpg";
import contact from "../../images/contactme.jpg";
import { useState } from "react";

function Model(props, ref) {
  const [nav, setNav] = React.useState(home);
  const [page, setPage] = React.useState("home");
  const [position, setPosition] = React.useState([4, -1.5, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );

  
  const { nodes, materials } = useGLTF("/models/robot-5.glb");

const texture = useLoader(TextureLoader, nav);



function switchImage(buttonPressed, e) {
    setNav(buttonPressed);
    const texture = useLoader(TextureLoader, nav);
}

  return (
    <group 
        {...props} 
        // {...bind()} 
        position={position} 
        dispose={null}>
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
                switchImage(about, e)
            }}
            position={[-2.29, -10.59, 9.51]}
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
                    switchImage(patents, e)
                }
            }}
            position={[2.29, -14.92, 7.61]}
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
                    switchImage(volunteer, e)
                }
            }}
            position={[-2.29, -18.91, 5.37]}
            ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.contactButton.geometry}
            onClick={(e) => {
                setPage("contact");
                switchImage(contact, e)
            }}
            position={[-2.29, -10.51, -6.34]}
            ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.industryButton.geometry}
            onClick={(e) => {
                setPage("industry")
                switchImage(chase, e)
            }}
            position={[-2.29, -14.15, -7.37]}
            ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
          <mesh
        castShadow
        receiveShadow
        geometry={nodes.PatentsButton.geometry}
        // material={materials["Robot base"]}
        onClick={(e) => {
            if (page == "innovation") {
                switchImage(patents, e)
            } else if (page == "about") {
                switchImage(about, e)
            } else if (page == "industry") {
                switchImage(chase, e)
            }
        }}
        position={[-1.89, -6.95, 12.18]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PublicationsButton.geometry}
        // material={materials.transparent}
        position={[-1.89, -6.95, 4.8]}
        scale={[1, 1, 1.32]}
        onClick={(e) => {
            if (page == "innovation") {
                switchImage(publications, e)
            } else if (page == "about") {
                switchImage(hobbies, e)
            } else if (page == "industry") {
                switchImage(pc, e)
            }
        }}
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
                switchImage(conferences, e)
            } else if (page == "about") {
                switchImage(skills, e)
            }
        }}
        position={[-1.89, -6.95, -3.99]}
        scale={[1, 1, 1.27]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ResearchButton.geometry}
        // material={materials.transparent}
        onClick={(e) => {
            switchImage(research, e)
        }}
        position={[-1.89, -6.95, -11.16]}
        ><meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BackButton.geometry}
        position={[-1.92, -12.13, -12.88]}
        scale={[1.37, 1.12, 1.37]}
        material={materials["transparent"]}
        onClick={(e) => {
            setPage("home");
            switchImage(home, e)
        }}
        > <meshBasicMaterial side={THREE.DoubleSide} map={texture}/></mesh>

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

useGLTF.preload("/models/robot-5.glb");
export default forwardRef(Model);
