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
        position: "fixed",
      }}
    >
      <Float
        speed={1}
        rotationIntensity={0.15}
        floatIntensity={1}
        floatingRange={[1, 1.3]}
      >
        <Robot rotation={[0, 30, 0]} scale={[0.3, 0.55, 0.6]} />
      </Float>
      <OrthographicCamera
        top={200}
        left={300}
        bottom={-200}
        right={-300}
        near={-50}
        far={100}
        makeDefault
        position={[0, 0, 0]}
        zoom={30}
      />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 100, -10]} intensity={2.5} />
      {/* <OrbitControls enableRotate={false} enableDamping={true} enableZoom={true}/> */}

      <OrbitController />
    </Canvas>
  );
}
