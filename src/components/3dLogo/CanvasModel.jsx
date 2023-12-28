import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center,OrbitControls } from "@react-three/drei";

import CameraRig from "./CameraRig";
import Logo from "./Logo";
const CanvasModel = () => {
  return (
    <Canvas  className=" cursor-pointer  relative right-[12vw] lg:right-[18vw] xl:right-[25vw] " camera={{ position: [0, 2, 5], fov: 20 }}>
      <OrbitControls/>
      
      <ambientLight intensity={1} color="white" />

{/* Point Lights for specific areas */}


<Environment preset="sunset" />
        <Center>
          <Logo />
        </Center>
    </Canvas>
  );
};

export default CanvasModel;
