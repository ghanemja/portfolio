import * as React from "react";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../utils/anglesToRadians";

export default function OrbitController() {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(40));
      // orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      enableZoom={true}
      enableDamping={false}
      ref={orbitControlsRef}
      minPolarAngle={angleToRadians(30)}
      maxPolarAngle={angleToRadians(80)}
    />
  );
}
