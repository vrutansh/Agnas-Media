import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

export function FooterModel(props) {
  const ref = useRef()
  const scroll = useScroll()
  const tl = useRef();

  const gltf = useLoader(GLTFLoader, './models/handshake2.glb');

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // LOGO ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 100,
        y: 1.5,
      },
      0
    );
  }, []);
 


  return <group ref={ref} scale={1} position={[1, -300, 7]} rotation={[0, -1.5, 0]}><primitive object={gltf.scene} /></group> ;
}