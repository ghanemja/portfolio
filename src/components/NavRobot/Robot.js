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
        height: "100vh",
        width: "100%",
        zIndex: 1,
        position: "fixed",
      }}
    >
      <Float
        speed={5}
        rotationIntensity={0.25}
        floatIntensity={1}
        floatingRange={[1, 3]}
      >
        <Robot rotation={[0, -2, 0]} />
      </Float>
      <OrthographicCamera
        top={200}
        left={150}
        bottom={-200}
        right={-150}
        near={-50}
        far={100}
        makeDefault
        position={[0, 0, 0]}
        zoom={10}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 100, -10]} intensity={2.5} />
      {/* <OrbitControls enableRotate={false} enableDamping={true} enableZoom={true}/> */}

      <OrbitController />
    </Canvas>
  );
}
