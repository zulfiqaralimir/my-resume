"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { GLTFLoader, type GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";

export type SoldierAction = "Idle" | "Walk" | "Run";

function Soldier({ action, gltf }: { action: SoldierAction; gltf: GLTF }) {
  const root = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0 });
  const mixer = useMemo(() => new THREE.AnimationMixer(gltf.scene), [gltf]);
  const actions = useMemo(() => {
    const map: Partial<Record<SoldierAction, THREE.AnimationAction>> = {};
    for (const name of ["Idle", "Walk", "Run"] as const) {
      const clip = THREE.AnimationClip.findByName(gltf.animations, name);
      if (clip) {
        // lock root motion: keep the hips from travelling sideways/forward so the character stays in place
        clip.tracks.forEach((t) => {
          if (/Hips\.position$/.test(t.name)) {
            const v = t.values;
            const x0 = v[0];
            const z0 = v[2];
            for (let i = 0; i < v.length; i += 3) {
              v[i] = x0;
              v[i + 2] = z0;
            }
          }
        });
        map[name] = mixer.clipAction(clip);
      }
    }
    return map;
  }, [gltf, mixer]);
  const current = useRef<THREE.AnimationAction | null>(null);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  // crossfade between animations
  useEffect(() => {
    const next = actions[action];
    if (!next) return;
    next.reset().setEffectiveTimeScale(action === "Run" ? 1 : 1).setEffectiveWeight(1).play();
    if (current.current && current.current !== next) current.current.crossFadeTo(next, 0.35, false);
    current.current = next;
  }, [action, actions]);

  useFrame((_, dt) => {
    mixer.update(dt);
    // turn toward the cursor (character looks left/right with the mouse)
    if (root.current) {
      const target = -pointer.current.x * 0.7;
      root.current.rotation.y += (target - root.current.rotation.y) * 0.06;
    }
  });

  return (
    <group ref={root} position={[0, -0.95, 0]}>
      <primitive object={gltf.scene} />
    </group>
  );
}

export default function Soldier3D({ action }: { action: SoldierAction }) {
  const [gltf, setGltf] = useState<GLTF | null>(null);
  useEffect(() => {
    let alive = true;
    new GLTFLoader().load("/models/Soldier.glb", (g) => alive && setGltf(g));
    return () => { alive = false; };
  }, []);
  if (!gltf) return null;
  return (
    <Canvas camera={{ position: [0, 0.0, 4.4], fov: 32 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[2, 3, 3]} intensity={2.2} />
      <directionalLight position={[-3, 1, -2]} intensity={1.0} color="#4da3ff" />
      <Soldier action={action} gltf={gltf} />
    </Canvas>
  );
}
