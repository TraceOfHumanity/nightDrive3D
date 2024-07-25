import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import React from "react";
import { Ground } from "./Ground";
import { Car } from "./Car";
import Rings from "./Rings";
// import { Boxes } from "./Boxes";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Vector2 } from "three";

export const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.55} />
      <PerspectiveCamera makeDefault position={[3, 0.5, 5]} fov={50} />
      <ambientLight intensity={0.5} />
      <color args={[0, 0, 0]} attach="background" />
      <spotLight
        color="#FE0101"
        intensity={50}
        angle={3}
        penumbra={0.5}
        position={[4, 3, 1]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color="#038CAF"
        intensity={50}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />

      <Ground />
      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera>
      {/* <Rings /> */}
      {/* <Boxes /> */}
      <EffectComposer>
        {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={0.1} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={1} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={new Vector2(0.0005, 0.0012)} // color offset
          radialModulation={true} // Enable radial modulation
          modulationOffset={0.23} // Example value
        />
      </EffectComposer>
      {/* <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="red" />
      </mesh> */}
    </>
  );
};
