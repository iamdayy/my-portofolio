"use client";

import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { TextureLoader } from "three";
import InteractiveTerminal from "./InteractiveTerminal";

const AnimatedImage = motion(Image);

const Hero = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center min-h-[80vh]">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedImage
              src="/img/me.png"
              alt="Dayan Sauqy | Fullstack Developer"
              width={500}
              height={500}
              className="rounded-full mx-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold mb-4">Dayan Sauqy</h1>
            <h2 className="text-2xl text-gray-600 dark:text-gray-300 mb-4">
              Fullstack Developer
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As a passionate full-stack developer with a strong foundation in
              modern web technologies, I have the expertise to create efficient,
              scalable, and user-friendly applications.As the head of my
              university's IT club, I have honed my leadership and teamwork
              skills.Currently, I am expanding my skillset by exploring machine
              learning.
            </p>
            <motion.div
              className="flex justify-center md:justify-start space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="https://github.com/iamdayy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Github aria-label="Github Profile" />
              </a>
              <a
                href="https://linkedin.com/in/dayan-sauqy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Linkedin aria-label="Linkedin Profile" />
              </a>
              <a
                href="mailto:iamdayy14@gmail.com"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                <Mail aria-label="Email Contact" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="mt-12 mb-12">
          <InteractiveTerminal />
        </div>
        <div className="mt-12 h-64 md:h-96">
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
              <OrbitControls enableZoom={true} />
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} />
              <FloatingTechStack />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </section>
  );
};

function FloatingTechStack() {
  const group = useRef<THREE.Group>(null);

  const technologies = [
    { name: "Laravel", image: "/img/laravel.png" },
    { name: "Node.js", image: "/img/node-js.png" },
    { name: "ExpressJs", image: "/img/ExpressJS.png" },
    { name: "TypeScript", image: "/img/typescript.png" },
    { name: "MongoDB", image: "/img/MongoDB.png" },
    { name: "Nuxt", image: "/img/NuxtJS.png" },
    { name: "Next.js", image: "/img/nextjs.png" },
  ];

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      {technologies.map((tech, index) => (
        <FloatingTech
          key={tech.name}
          image={tech.image}
          index={index}
          total={technologies.length}
        />
      ))}
    </group>
  );
}

function FloatingTech({
  image,
  index,
  total,
}: {
  image: string;
  index: number;
  total: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const texture = useLoader(TextureLoader, image);

  const angle = (index / total) * Math.PI * 2;
  const radius = 4;
  const posX = Math.sin(angle) * radius;
  const posZ = Math.cos(angle) * radius;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        Math.sin(state.clock.getElapsedTime() + index) * 0.5;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      if (hovered) {
        meshRef.current.scale.setScalar(1.2);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 0.1]} // Menambahkan sedikit ketebalan
      position={[posX, 0, posZ]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        attach="material"
        map={texture}
        transparent
        metalness={0.5}
        roughness={0.5}
      />
    </Box>
  );
}

export default Hero;
