import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { CarShow } from './components/CarShow';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas shadows>
        <CarShow />

      </Canvas>
    </Suspense>
  );
}

export default App;
