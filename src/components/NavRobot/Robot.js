import * as React from "react";
import { Canvas } from "@react-three/fiber";
import Robot from "./robotGLTF";
import { Float } from "@react-three/drei";

export default function RobotScene(experience) {

  return (
    <Canvas style={{ zIndex: 1, height: "100%", width: "50vw", position: "absolute" }} >
       <Float speed={1.5} rotationIntensity={0.2} floatIntensity={2} floatingRange={[1, 1.1]}>
        <Robot rotation={[0, 11, 0]} scale={[.0001, 0.16, 0.17]} experience={experience}/>
      </Float> 
      <perspectiveCamera
        near={10}
        far={300}
        fov={400}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={5} />
    </Canvas>
  );
}
