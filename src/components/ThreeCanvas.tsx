import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

// Glowing cyber sphere representing the high-tech digital globe
function CyberGlobe() {
  const globeRef = useRef<THREE.Group>(null);
  const outerDotsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    const { x, y } = state.pointer;
    
    if (globeRef.current) {
      // Continuous idle rotation
      globeRef.current.rotation.y += 0.004;
      
      // Interactive tilting tracking mouse coordinates
      globeRef.current.rotation.x = THREE.MathUtils.lerp(
        globeRef.current.rotation.x,
        y * 0.4,
        0.05
      );
      globeRef.current.rotation.z = THREE.MathUtils.lerp(
        globeRef.current.rotation.z,
        -x * 0.4,
        0.05
      );
    }

    if (outerDotsRef.current) {
      // Rotate the outer particle field in the opposite direction
      outerDotsRef.current.rotation.y -= 0.001;
      outerDotsRef.current.rotation.x = THREE.MathUtils.lerp(
        outerDotsRef.current.rotation.x,
        -y * 0.2,
        0.05
      );
    }
  });

  // Create coordinates for a particle shell around the globe
  const particleCount = 400;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    // Spherical coordinate distribution
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = 2.4 + Math.random() * 0.4; // Shell radius span

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  return (
    <group ref={globeRef}>
      {/* Target ambient and point lights for high-contrast neon glows */}
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
      <pointLight position={[-10, -10, -10]} intensity={1.0} color="#8b5cf6" />
      
      {/* Main Wireframe Globe Mesh */}
      <mesh>
        <sphereGeometry args={[1.8, 20, 20]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Primary Dot Grid Shell representing continents/data nodes */}
      <points>
        <sphereGeometry args={[1.82, 32, 24]} />
        <pointsMaterial
          color="#06b6d4"
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.8}
        />
      </points>

      {/* Secondary Outer Floating Point Cloud */}
      <points ref={outerDotsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#8b5cf6"
          size={0.025}
          sizeAttenuation
          transparent
          opacity={0.5}
        />
      </points>

      {/* Decorative Core Orb removed as requested */}
    </group>
  );
}

export default function ThreeCanvas() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[500px] relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <CyberGlobe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
