import * as React from "react";
import { Canvas } from "@react-three/fiber";
import Robot from "./robotGLTF";
import {
  OrbitControls,
  OrthographicCamera,
  Float,
  ScreenSpace,
} from "@react-three/drei";
import OrbitController from "./OrbitController";

export default function RobotScene() {
  return (
    <Canvas
      style={{
        height: "100%",
        width: "100%",
        zIndex: 1,
        position: "absolute"
      }}
    >
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={2}
        floatingRange={[1, 1.5]}
      >
        <Robot rotation={[0, 30, 0]} scale={[0.3, 0.55, 0.6]} />
      </Float>
      <OrthographicCamera
        top={500}
        left={-600}
        bottom={-500}
        right={-300}
        near={-50}
        far={400}
        makeDefault
        position={[0, 0, 0]}
        zoom={30}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 100, -10]} intensity={2.5} />
      <OrbitControls enableRotate={true} autoRotate={true} enableDamping={true} enableZoom={true}/>

      <OrbitController />
    </Canvas>
  );
}
