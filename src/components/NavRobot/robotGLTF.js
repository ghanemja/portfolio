import React, { useRef, forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree, useFrame, useLoader } from "@react-three/fiber";
import { useDrag, useHover } from "@use-gesture/react";
// import home from "/images/home.svg";


 function Model(props, ref) {
    const [hover, setHover] = React.useState(false);
    const [scale] = React.useState([0.5, 0.75, 0.35])
    const robot = useRef();
    const [position, setPosition] = React.useState([0, 0, 0]);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;
    const bind = useDrag(
      ({ offset: [x, y] }) => {
        const [, , z] = position;
        setPosition([-x / aspect, -y / aspect, z]);
      },
      { pointerEvents: true }
    );
  const { nodes, materials } = useGLTF('/models/newRobot.glb')
  return (
    <group {...props} scale={hover ? scale.map((x) => {return x * 1.2}) : scale  } onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}  dispose={null} ref={robot} position={position} {...bind()}>
       <group position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]}>
        <mesh geometry={nodes.Cube.geometry} material={materials['Robot base']} />
        <mesh geometry={nodes.Cube_1.geometry} material={materials['Robot second']} />
        <mesh geometry={nodes.Cube_2.geometry} material={materials['Robot third']} />
      </group>
      <group name='screen-group' >
      <mesh geometry={nodes.Screen.geometry}  position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh geometry={nodes.top_right_link.geometry} name="top-right"  position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh geometry={nodes.mid_right_link.geometry} name="mid-right" position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh geometry={nodes.bottom_right_link.geometry} name="bottom-right"  position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh geometry={nodes.top_left_link.geometry} name="top-left"  position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh geometry={nodes.mid_left_link.geometry} name="mid-left" position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      <mesh  geometry={nodes.bottom_left_link.geometry} name="bottom-left"position={[0, -13.54, 0]} scale={[1.7, 11.99, 19.34]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/newRobot.glb');
export default forwardRef(Model);

