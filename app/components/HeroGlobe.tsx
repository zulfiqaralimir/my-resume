"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

const R = 1.6; // ocean-level radius
const RAISE = 0.05; // how far land is extruded above the ocean

function toVec(lat: number, lon: number, r: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

// Geographic markers [lat, lon] — Africa, Europe, Middle East, Asia, Southeast Asia.
const markers: [number, number][] = [
  [30.04, 31.24], // Cairo
  [-1.29, 36.82], // Nairobi
  [6.52, 3.38], // Lagos
  [-26.2, 28.05], // Johannesburg
  [51.5, -0.12], // London
  [48.85, 2.35], // Paris
  [52.52, 13.4], // Berlin
  [25.2, 55.27], // Dubai
  [24.71, 46.67], // Riyadh
  [33.69, 73.05], // Islamabad
  [28.61, 77.21], // Delhi
  [39.9, 116.4], // Beijing
  [35.68, 139.69], // Tokyo
  [13.75, 100.5], // Bangkok
  [1.35, 103.82], // Singapore
  [-6.2, 106.85], // Jakarta
];

// Attaches a flat red/white marker to the surface, facing outward.
function Marker({ lat, lon }: { lat: number; lon: number }) {
  const pos = useMemo(() => toVec(lat, lon, R + RAISE + 0.006), [lat, lon]);
  // orient the flat marker so it lies on the surface (local space, so it stays attached while the globe rotates)
  const quat = useMemo(() => new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize()), [pos]);
  return (
    <group position={pos} quaternion={quat}>
      <mesh>
        <circleGeometry args={[0.07, 32]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0, 0, 0.004]}>
        <circleGeometry args={[0.05, 32]} />
        <meshBasicMaterial color="#ff261d" />
      </mesh>
    </group>
  );
}

const atmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    vNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const atmosphereFragment = /* glsl */ `
  varying vec3 vNormal;
  void main() {
    float i = pow(max(0.0, 0.66 - dot(vNormal, vec3(0.0, 0.0, 1.0))), 4.0);
    gl_FragColor = vec4(0.09, 0.65, 1.0, 1.0) * i * 0.9;
  }
`;

function Globe({ reduce }: { reduce: boolean }) {
  const [map, height] = useLoader(THREE.TextureLoader, ["/earth-stylized.jpg", "/earth-height.png"]);
  map.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 4;

  const group = useRef<THREE.Group>(null);
  const rings = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    if (!reduce) g.rotation.y += dt * 0.1;
    g.rotation.x += (pointer.current.y * 0.18 + 0.25 - g.rotation.x) * 0.04;
    if (rings.current && !reduce) rings.current.rotation.z += dt * 0.05;
  });

  return (
    <>
      {/* orbital rings behind the globe */}
      <group ref={rings} rotation={[1.4, 0.2, 0]}>
        <mesh>
          <torusGeometry args={[R * 1.14, 0.004, 8, 160]} />
          <meshBasicMaterial color="#7fd0ff" transparent opacity={0.22} />
        </mesh>
        <mesh>
          <torusGeometry args={[R * 1.22, 0.003, 8, 160]} />
          <meshBasicMaterial color="#7fd0ff" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* atmosphere glow */}
      <mesh>
        <sphereGeometry args={[R * 1.1, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
          depthWrite={false}
        />
      </mesh>

      <group ref={group} rotation={[0.25, -2.3, 0]}>
        <mesh>
          <sphereGeometry args={[R, 128, 128]} />
          <meshPhysicalMaterial
            map={map}
            emissiveMap={map}
            emissive="#ffffff"
            emissiveIntensity={0.12}
            displacementMap={height}
            displacementScale={RAISE}
            roughness={0.45}
            metalness={0.05}
            clearcoat={0.35}
            clearcoatRoughness={0.25}
          />
        </mesh>
        {markers.map(([lat, lon], i) => (
          <Marker key={i} lat={lat} lon={lon} />
        ))}
      </group>
    </>
  );
}

export default function HeroGlobe() {
  const [reduce, setReduce] = useState(false);
  const [visible, setVisible] = useState(true);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  // pause rendering when the hero scrolls out of view
  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrap}
      aria-hidden="true"
      className="pointer-events-none relative mx-auto mb-2 h-52 w-52 sm:h-80 sm:w-80 lg:absolute lg:right-4 lg:top-1/2 lg:mb-0 lg:h-[560px] lg:w-[560px] lg:-translate-y-1/2"
    >
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 5], fov: 46 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance", toneMapping: THREE.NoToneMapping }}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 2, 4]} intensity={1.7} />
        <directionalLight position={[-4, 1, -2]} intensity={1.2} color="#16a5ff" />
        <Globe reduce={reduce} />
      </Canvas>
    </div>
  );
}
