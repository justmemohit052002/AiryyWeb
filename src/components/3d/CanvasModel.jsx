import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";

import CameraRig from "./CameraRig";
import Logo from "./Logo";
const CanvasModel = () => {
  return (
    <Canvas  className=" h-2 w-2" camera={{ position: [0, 2, 15], fov: 19 }}>
      <OrbitControls/>
      <Environment preset="sunset" />
      <CameraRig>
        <Center>
          <Logo />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
