import {Canvas} from "@react-three/fiber";
import React, {Suspense} from "react";
import {CarShow} from "./components/CarShow";

function App() {
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Canvas shadows >
          <CarShow />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;
