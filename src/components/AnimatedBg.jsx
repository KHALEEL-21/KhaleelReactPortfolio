// AnimatedBg.jsx
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";

const AnimatedShapes = () => {
  const meshRef = useRef();

  // Animation rotation
  useFrame(({ clock }) => {
    meshRef.current.rotation.x = clock.getElapsedTime() / 2;
    meshRef.current.rotation.y = clock.getElapsedTime() / 3;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <torusKnotGeometry args={[2, 0.5, 128, 32]} />
      <MeshWobbleMaterial color="#00aaff" speed={1} factor={0.6} />
    </mesh>
  );
};

const AnimatedBg = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1, // make sure background
      }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <AnimatedShapes />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default AnimatedBg;
