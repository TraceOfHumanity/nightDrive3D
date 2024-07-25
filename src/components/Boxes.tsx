// import React, { useRef, useState } from "react";
// import { useFrame } from "@react-three/fiber";
// import { Vector3, Mesh } from "three";

// function Box({ color }: { color: [number, number, number] }) {
//   const box = useRef<Mesh>(null!);
//   const time = useRef(0);
//   const [position, setPosition] = useState(getInitialPosition());
//   const [xRotSpeed] = useState(() => Math.random());
//   const [yRotSpeed] = useState(() => Math.random());
//   const [scale] = useState(() => Math.pow(Math.random(), 2.0) * 0.5 + 0.05);

//   function getInitialPosition() {
//     let v = new Vector3(
//       (Math.random() * 2 - 1) * 3,
//       Math.random() * 2.5 + 0.1,
//       (Math.random() * 2 - 1) * 15
//     );
//     if (v.x < 0) v.x -= 1.75;
//     if (v.x > 0) v.x += 1.75;

//     return v;
//   }

//   function resetPosition() {
//     let v = new Vector3(
//       (Math.random() * 2 - 1) * 3,
//       Math.random() * 2.5 + 0.1,
//       Math.random() * 10 + 10
//     );
//     if (v.x < 0) v.x -= 1.75;
//     if (v.x > 0) v.x += 1.75;

//     setPosition(v);
//   }

//   useFrame(
//     (state, delta) => {
//       time.current += delta * 2;
//       let newZ = position.z - time.current;

//       if (newZ < -10) {
//         resetPosition();
//         time.current = 0;
//       }

//       if (box.current) {
//         box.current.position.set(position.x, position.y, newZ);
//         box.current.rotation.x += delta * xRotSpeed;
//         box.current.rotation.y += delta * yRotSpeed;
//       }
//     },
//     [xRotSpeed, yRotSpeed, position]
//   );

//   return (
//     <mesh ref={box} rotation-x={Math.PI * 0.5} scale={scale} castShadow>
//       <dodecahedronGeometry args={[1, 0]} />
//       <meshStandardMaterial color={color} envMapIntensity={0.15} />
//     </mesh>
//   );
// }

// export function Boxes() {
//   const [arr] = useState(() => {
//     let a = [];
//     for (let i = 0; i < 20; i++) a.push(0);
//     return a;
//   });

//   return (
//     <>
//       {arr.map((_, i) => (
//         <Box
//           key={i}
//           color={i % 2 === 0 ? [0.4, 0.1, 0.1] : [0.05, 0.15, 0.4]}
//         />
//       ))}
//     </>
//   );
// }
