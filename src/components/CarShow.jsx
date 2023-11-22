import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import React from "react";
import { Ground } from "./Ground";

export const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.55} />
      <PerspectiveCamera makeDefault position={[3, 0.5, 5]} fov={50} />
      <ambientLight intensity={1} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color="#FE5101"
        intensity={20}
        angle={3}
        penumbra={2}
        position={[4, 3, 1]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={20}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
    </>
  );
};
