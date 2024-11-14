"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const GLTFModel = () => {
  const { scene } = useGLTF("/gltf/shiba/scene.gltf");

  return <primitive object={scene} scale={1} />;
};

const GLTFViewer = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <GLTFModel />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};

export default GLTFViewer;
