import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line, OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

const AnimatedNetwork = ({ baseSpeed = 5, lineAmplitude = 0.003 }) => {
  const groupRef = useRef();
  const { darkMode } = useTheme();

  // Generate points
  const points = useMemo(() => {
    const pts = [];
    const size = 10;
    const count = 30;
    for (let i = 0; i < count; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * size,
          (Math.random() - 0.5) * size,
          (Math.random() - 0.5) * size
        )
      );
    }
    return pts;
  }, []);

  // Generate connections
  const connections = useMemo(() => {
    const lines = [];
    const threshold = 3;
    for (let i = 0; i < points.length; i++) {
      for (let j = i + 1; j < points.length; j++) {
        if (points[i].distanceTo(points[j]) < threshold) {
          lines.push([points[i].clone(), points[j].clone()]);
        }
      }
    }
    return lines;
  }, [points]);

  // Assign random speed multiplier for each line
  const lineSpeeds = useMemo(
    () => connections.map(() => 0.5 + Math.random() * 2.5), // 0.5x to 3x speed
    [connections]
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    // Rotate whole network
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.15;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.07) * 0.08;

    // Animate lines with individual speeds
    groupRef.current.children.forEach((child, idx) => {
      if ("geometry" in child) {
        const line = child;
        const positions = line.geometry.attributes.position.array;
        const speed = lineSpeeds[idx] * baseSpeed;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(clock.getElapsedTime() * speed + i) * lineAmplitude;
        }
        line.geometry.attributes.position.needsUpdate = true;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {/* Lines */}
      {connections.map((pts, i) => (
        <Line
          key={i}
          points={pts}
          color={darkMode ? "hsl(0,0%,40%)" : "hsl(0,0%,60%)"}
          lineWidth={0.5}
          dashed={false}
        />
      ))}

      {/* Points */}
      <Points positions={points}>
        <PointMaterial
          color={darkMode ? "#888" : "#ccc"}
          size={0.05}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

const WaveBackground = () => {
  const { darkMode } = useTheme();

  return (
    <Canvas
      camera={{ position: [0, 2, 12], fov: 50 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        background: darkMode ? "#0a0a0a" : "#f5f5f5",
        transition: "background 0.5s ease",
      }}
    >
      <ambientLight intensity={0.5} />
      <AnimatedNetwork baseSpeed={1.5} lineAmplitude={0.004} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default WaveBackground;
