import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useDrag, useHover } from "@use-gesture/react";
import * as THREE from "three";
import { TextureLoader } from "three";
import home from "../../images/main_screen.jpg";
import research from "../../images/research.jpg";
import patents from "../../images/patents.jpg";
import Renderer from "../Experience/Renderer";

function Model(props, ref) {
  const [nav, setNav] = React.useState(home);
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
  const { nodes, materials } = useGLTF("/models/robot-nav-flipped-screen.glb");
  
const texture = useLoader(TextureLoader, nav);

function switchImage(current, buttonPressed) {
    console.log("button is pressed")
    setNav(buttonPressed);
    const texture = useLoader(TextureLoader, nav);
    console.log(current)
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
            material={materials.transparent}
            position={[1.31, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.innovationButton.geometry}
            material={materials.transparent}
            position={[1.31, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.volunteeringButton.geometry}
            material={materials.transparent}
            position={[1.31, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.contactButton.geometry}
            material={materials.transparent}
            position={[1.31, 0, 0]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.industryButton.geometry}
            onClick={(e) => {
                switchImage(nodes.industryButton, research)
            }}
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

useGLTF.preload("/models/robot-nav-flipped-screen.glb");
export default forwardRef(Model);