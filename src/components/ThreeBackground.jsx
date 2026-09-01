import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function FloatingParticles() {
  const particlesRef = useRef();
  const count = 300;
  const { mouse, viewport } = useThree();

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
      sizes[i] = Math.random() * 2 + 1;
    }
    return { positions, sizes };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
      
      // Cursor movement effect
      const targetX = mouse.x * viewport.width * 0.2;
      const targetY = -mouse.y * viewport.height * 0.2;
      particlesRef.current.position.x += (targetX - particlesRef.current.position.x) * 0.03;
      particlesRef.current.position.y += (targetY - particlesRef.current.position.y) * 0.03;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={positions.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#C85D3B"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

function StarField() {
  const starsRef = useRef();
  const starCount = 500;

  const { positions, colors, sizes } = useMemo(() => {
    const pos = new Float32Array(starCount * 3);
    const col = new Float32Array(starCount * 3);
    const siz = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Random colors between terracotta and gold
      const colorChoice = Math.random();
      if (colorChoice < 0.5) {
        col[i * 3] = 0.78; // R
        col[i * 3 + 1] = 0.36; // G
        col[i * 3 + 2] = 0.23; // B (terracotta)
      } else {
        col[i * 3] = 0.84; // R
        col[i * 3 + 1] = 0.47; // G
        col[i * 3 + 2] = 0.34; // B (accent secondary)
      }
      
      siz[i] = Math.random() * 3 + 0.5;
    }
    
    return { positions: pos, colors: col, sizes: siz };
  }, []);

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      starsRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={starCount}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
        vertexColors
      />
    </points>
  );
}

function GeometricShapes() {
  const groupRef = useRef();
  const { mouse } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.children.forEach((child, i) => {
        child.rotation.x = state.clock.elapsedTime * 0.08 * (i + 1);
        child.rotation.z = state.clock.elapsedTime * 0.04 * (i + 1);
      });
      
      // Cursor movement effect
      groupRef.current.rotation.x += (mouse.y * 0.2 - groupRef.current.rotation.x) * 0.015;
      groupRef.current.rotation.y += (mouse.x * 0.2 - groupRef.current.rotation.y) * 0.015;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[2, 1, -2]}>
        <icosahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#C85D3B" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh position={[-2, -1, -3]}>
        <octahedronGeometry args={[0.4, 0]} />
        <meshStandardMaterial color="#D87857" wireframe transparent opacity={0.2} />
      </mesh>
      <mesh position={[1, -2, -1]}>
        <tetrahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial color="#C85D3B" wireframe transparent opacity={0.25} />
      </mesh>
      <mesh position={[0, 2, -4]}>
        <dodecahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial color="#D87857" wireframe transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

function CursorLight() {
  const lightRef = useRef();
  const { mouse } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mouse.x * 5;
      lightRef.current.position.y = mouse.y * 5;
    }
  });

  return <pointLight ref={lightRef} intensity={1.2} color="#C85D3B" distance={15} />;
}

function ThreeBackground() {
  return (
    <div className="three-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.4} />
        <CursorLight />
        <StarField />
        <FloatingParticles />
        <GeometricShapes />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;