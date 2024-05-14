import { useScroll } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { easing } from 'maath'
import gsap from "gsap";



export function ALogo(props) {
  const ref = useRef()
  const scroll = useScroll()
  const scrollref = useRef();
  const tl = useRef();

  // function getWindowDimensions() {
  //   const { innerWidth: width, innerHeight: height } = window;
  //   return {
  //     width,
  //     height
  //   };
  // }
  
  // function useWindowDimensions() {
  //   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  //   useEffect(() => {
  //     function handleResize() {
  //       setWindowDimensions(getWindowDimensions());
  //     }
  
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }, []);
  
  //   return windowDimensions;
  // }
  
  // const { height, width } = useWindowDimensions();
  // console.log(height, width)
  const gltf = useLoader(GLTFLoader, './models/agnas1.glb');

  // if (width>500){
  //   useFrame((state, delta) => {
  //     // ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
  //     // state.events.update() // Raycasts every frame rather than on pointer-move
  //     easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
  //     state.camera.lookAt(0, 0, 0) // Look at center
  //     console.log("Working")
  //   })
  // }
  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // LOGO ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 0.4,
        z: 80,
      },
      0
    );
  }, []);
 


  return <group ref={ref} scale={18} position={[0, -6, 0]} rotation={[89.5, 0, 0]}><primitive object={gltf.scene} /></group> ;
}