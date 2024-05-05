import { forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react"
import { SRGBColorSpace } from "three"
import gsap from "gsap"
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export const ShowreelVideo = forwardRef((props, forwardRef) => {
  const ref = useRef();
  const tl = useRef();
  const scroll = useScroll();

  const [video] = useState(() => Object.assign(document.createElement('video'), { src: '/src/assets/showreel_preview.mp4', crossOrigin: 'Anonymous', loop: true, muted: true }))
  useEffect(() => void video.play(), [video])

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
        tl.current = gsap.timeline();
    
        tl.current.to(
          ref.current.rotation,
          {
            duration: 0.18,
            y: 0,
          },
          0
        );
        // LOGO ANIMATION
        tl.current.to(
          ref.current.position,
          {
            duration: 0.2,
            z: 6,
          },
          0
        );


        tl.current.to(
          ref.current.position, 
          { 
            y: 35, 
            duration: 0.5,
          }, 
          ">0.07"
        );

      }, [])

  
  return (
    <mesh ref={ref} rotation={[-0.12, -Math.PI, 0]} position={[0, 0.5, -20]} {...props}>
      <planeGeometry args={[16, 10]} />
      <meshBasicMaterial>
        <videoTexture attach="map" args={[video]} colorSpace={SRGBColorSpace} />
      </meshBasicMaterial>
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </mesh>
  )
})