import React from "react";
import { useGLTF } from "@react-three/drei";
useGLTF.preload("./models/Logo2.gltf");
const Logo = ({props}) => {
  
  const { nodes, materials } = useGLTF('./models/Logo2.gltf')
  console.log(materials);
  return (
    <group {...props} dispose={null}>
    <mesh geometry={nodes.path1.geometry} material={materials.Colors} rotation={[Math.PI / 2, 0, 0]} scale={22.15} />
  </group>
  )
};

export default Logo;


