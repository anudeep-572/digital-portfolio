import React, { useMemo, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Text, OrbitControls, Sphere, MeshDistortMaterial, Billboard } from '@react-three/drei';
import * as THREE from 'three';

const iconMapping = {
  'C++': 'cplusplus/cplusplus-original.svg',
  'Java': 'java/java-original.svg',
  'JavaScript': 'javascript/javascript-original.svg',
  'Python': 'python/python-original.svg',
  'HTML': 'html5/html5-original.svg',
  'CSS': 'css3/css3-original.svg',
  'Bootstrap': 'bootstrap/bootstrap-original.svg',
  'Spring MVC': 'spring/spring-original.svg',
  'React JS': 'react/react-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg',
  'MySQL': 'mysql/mysql-original.svg',
  'MongoDB': 'mongodb/mongodb-original.svg',
  'GitHub': 'https://cdn.simpleicons.org/github/white',
  'Figma': 'figma/figma-original.svg'
};

const SkillItem = ({ skill, position }) => {
  const path = iconMapping[skill];
  const url = path.startsWith('http') 
    ? path 
    : `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;
  
  const texture = useLoader(THREE.TextureLoader, url);
  if (texture) texture.colorSpace = THREE.SRGBColorSpace;
  
  return (
    <Billboard position={position}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh>
          <planeGeometry args={[0.9, 0.9]} />
          <meshBasicMaterial 
            map={texture} 
            transparent={true} 
            side={THREE.DoubleSide}
            alphaTest={0.5}
          />
        </mesh>
        <Text
          position={[0, -0.7, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          opacity={0.8}
        >
          {skill}
        </Text>
      </Float>
    </Billboard>
  );
};

const Globe = ({ skills }) => {
  const groupRef = useRef();
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  const skillsWithPositions = useMemo(() => {
    const count = skills.length;
    const radius = 4.8; 
    return skills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      
      return { skill, position: [x, y, z] };
    });
  }, [skills]);

  return (
    <group ref={groupRef}>
      <Sphere args={[2, 64, 64]}>
        <MeshDistortMaterial
          color="#ff4d4d"
          speed={4}
          distort={0.4}
          radius={1}
          emissive="#ff4d4d"
          emissiveIntensity={0.2}
        />
      </Sphere>
      
      {skillsWithPositions.map((item, i) => (
        <Suspense key={i} fallback={null}>
          <SkillItem {...item} />
        </Suspense>
      ))}
      
      <Sphere args={[4.8, 48, 48]}>
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.04} />
      </Sphere>
    </group>
  );
};

export const SkillsGlobe = () => {
  const skills = Object.keys(iconMapping);

  return (
    <div className="globe-container">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ff4d4d" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#4d4dff" />
        <Suspense fallback={<div className="loading-globe">Initializing 3D World...</div>}>
          <Globe skills={skills} />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};
