import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useDrag, useHover } from "@use-gesture/react";
import * as THREE from "three";
import { TextureLoader } from "three";
import home from "../../images/main_screen.jpg";
import research from "../../images/research.jpg";
import patents from "../../images/patents.jpg";

function Model(props, ref) {
  const [nav, setNav] = React.useState(home);
  const robot = useRef();
  const [position, setPosition] = React.useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x / aspect, -y / aspect, z]);
    },
    { pointerEvents: true }
  );
  const { nodes, materials } = useGLTF("/models/robot-nav2.glb");
  
const texture = useLoader(TextureLoader, nav);


function switchImage(buttonPressed) {
    console.log(buttonPressed)
    setNav(buttonPressed);
    //     const texture = useLoader(TextureLoader, nav);
}

  return (
    <group
      {...props}
      dispose={null}
      ref={robot}
      position={position}
      {...bind()}
    >
      {/* <group position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]}> */}
      <mesh geometry={nodes.Cube.geometry} material={materials['Robot base']} />
      <mesh geometry={nodes.Cube_1.geometry} material={materials['Robot second']} />
      <mesh geometry={nodes.Cube_2.geometry} material={materials['Robot third']} />
      <mesh geometry={nodes.Cube_3.geometry} material={materials['Material.001']} />
      {/* </group> */}
      <mesh 
        geometry={nodes.aboutMeButton.geometry} 
        position={[1.314691, 0, 0]} 
      />
      <mesh 
        geometry={nodes.innovationButton.geometry} 
        onClick={ switchImage(patents) }
        position={[1.314691, 0, 0]} 
      />
      <mesh geometry={nodes.volunteeringButton.geometry} position={[1.314691, 0, 0]} />
      <mesh geometry={nodes.contactButton.geometry} position={[1.314691, 0, 0]} />
      <mesh geometry={nodes.industryButton.geometry} position={[1.314691, 0, 0]} />
      <mesh geometry={nodes.Screen.geometry} position={[1.314691, 0, 0]} >
      <meshBasicMaterial side={THREE.DoubleSide} attach="material" map={texture}/></mesh>
    </group>
  );
}

useGLTF.preload("/models/robot-nav2.glb");
export default forwardRef(Model);
