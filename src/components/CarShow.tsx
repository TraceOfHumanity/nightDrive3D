import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {Ground} from "./Ground";
import {Car} from "./Car";
import Rings from "./Rings";

import {Boxes} from "./Boxes";

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
      <Rings />
      <Boxes />
    </>
  );
};
