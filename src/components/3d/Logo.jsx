import React, { useEffect, useRef } from "react";
import { useGLTF,useFBX } from "@react-three/drei";
useGLTF.preload("models/logo.glb");
const Logo = () => {
  const { nodes, materials } = useGLTF("models/logo.glb");
  return (
    <group  dispose={null}>
    <mesh geometry={nodes.path1.geometry} material={materials['Material.003']} position={[0, 1.634, 0]} rotation={[Math.PI / 2, 0, 0]} scale={22.15} />
  </group>
  )
};

export default Logo;


