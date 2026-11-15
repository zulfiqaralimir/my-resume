"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RADIUS = 1.6;

function toVec(lat: number, lon: number, r: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

// Illustrative accent points only (not live data).
const accents: [number, number][] = [
  [-33, 149], [37, -120], [-3, -60], [62, 105], [39, 22], [-26, 25], [30, 70], [10, 20],
];

function Globe({ reduce }: { reduce: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const dots = useMemo(() => {
    const n = 1800;
    const arr = new Float32Array(n * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      arr.set([Math.cos(t) * r * RADIUS, y * RADIUS, Math.sin(t) * r * RADIUS], i * 3);
    }
    return arr;
  }, []);

  const hot = useMemo(() => {
    const arr = new Float32Array(accents.length * 3);
    accents.forEach(([la, lo], i) => toVec(la, lo, RADIUS * 1.01).toArray(arr, i * 3));
    return arr;
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    if (!reduce) g.rotation.y += dt * 0.12;
    g.rotation.x += (pointer.current.y * 0.25 + 0.3 - g.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[RADIUS * 0.985, 64, 64]} />
        <meshStandardMaterial color="#1f5fd6" roughness={0.55} metalness={0.1} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[dots, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#8fb8ff" size={0.022} sizeAttenuation transparent opacity={0.55} depthWrite={false} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[hot, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#ff7a1a" size={0.1} sizeAttenuation transparent opacity={0.95} depthWrite={false} />
      </points>
    </group>
  );
}

export default function HeroGlobe() {
  const [show, setShow] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    setShow(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  if (!show) return null;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute right-6 top-6 h-72 w-72">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 2, 4]} intensity={2.2} />
        <Globe reduce={reduce} />
      </Canvas>
    </div>
  );
}
