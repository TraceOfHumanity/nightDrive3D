// src/react-three-fiber.d.ts
import { JSX } from 'react';
import { Mesh } from 'three';

declare module '@react-three/fiber' {
  namespace JSX {
    interface IntrinsicElements {
      mesh: ReactThreeFiber.Object3DNode<Mesh, typeof Mesh>;
      torusGeometry: ReactThreeFiber.GeometryNode<THREE.TorusGeometry, typeof THREE.TorusGeometry>;
      meshStandardMaterial: ReactThreeFiber.MaterialNode<THREE.MeshStandardMaterial, [THREE.MeshStandardMaterialParameters]>;
    }
  }
}
