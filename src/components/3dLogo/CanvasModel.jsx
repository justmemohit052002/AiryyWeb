import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center,OrbitControls } from "@react-three/drei";

import CameraRig from "./CameraRig";
import Logo from "./Logo";
const CanvasModel = () => {
  return (
    <Canvas  className="relative right-[12vw] lg:right-[20vw] " camera={{ position: [0, 2, 5], fov: 20 }}>
      <OrbitControls/>
      
      <ambientLight intensity={0.5} color="white" />

{/* Point Lights for specific areas */}
<pointLight position={[0, 2, 1.5]} intensity={1} color="white" />
<pointLight position={[-1.116, 0.097, 1.61]} intensity={1} color="white" />
<pointLight position={[-4.719, 2.034, -2.093]} intensity={1} color="white" />
<pointLight position={[4.148, 2.034, -3.838]} intensity={1} color="white" />
<pointLight position={[1.118, 0.657, 1.553]} intensity={1} color="white" />
<pointLight position={[0, -1.86, -2.294]} intensity={1} color="white" />

<Environment preset="sunset" />
        <Center>
          <Logo />
        </Center>
    </Canvas>
  );
};

export default CanvasModel;
