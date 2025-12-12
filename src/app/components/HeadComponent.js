"use client";

import { useRef, useState, Suspense } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, DotScreen, Pixelation } from "@react-three/postprocessing";

var rotationScale = 3;

function HeadMesh({ mouseX, mouseY }) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [rx, setRX] = useState(0);
  const [ry, setRY] = useState(Math.PI / 1.47);

  const refMesh = useRef();
  const gltf = useLoader(GLTFLoader, "/3d/head.gltf");
  const nodes = gltf?.nodes;

  useFrame(() => {
    if (!refMesh.current) return;

    const targetX = (mouseY / window.innerHeight - 0.5) / rotationScale;
    const targetY = Math.PI / 1.47 + (mouseX / window.innerWidth - 0.5) / rotationScale;

    setRX((prev) => (Math.abs(prev - targetX) < 0.002 ? targetX : prev + (targetX - prev) * 0.2));
    setRY((prev) => (Math.abs(prev - targetY) < 0.002 ? targetY : prev + (targetY - prev) * 0.2));

    refMesh.current.rotation.x = rx;
    refMesh.current.rotation.y = ry;
  });

  if (!nodes || !nodes.head) return null;

  return (
    <mesh rotation={[0, Math.PI / 1.47, 0]} position={[-0.06, -0.21, 0]} geometry={nodes.head.geometry} ref={refMesh}>
      <meshStandardMaterial transparent opacity={1} color={"#ffffff"} roughness={0.5} metalness={0.3} />
    </mesh>
  );
}

function HeadComponent({ mouseX, mouseY }) {
  return (
    <Canvas id="head-fiber" camera={{ fov: 25, near: 0.1, far: 10, position: [0, 0, 0.85] }} onCreated={(state) => state.gl.setClearColor("white")}>
      <Suspense fallback={null}>
        <HeadMesh mouseX={mouseX} mouseY={mouseY} />
        <pointLight color="white" position={[0, 0, 2]} intensity={20} />
        <color attach="background" args={["white"]} />

        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DotScreen angle={Math.PI / 3} scale={2} />
          <Pixelation granularity={3} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}

export default HeadComponent;
