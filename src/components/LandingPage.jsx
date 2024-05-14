import React, { useEffect, useState } from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { ALogo } from './ALogo'
import { ShowreelVideo } from './ShowreelVideo'
import WorkScroller from './WorkScroller'
import { FooterModel } from './FooterModel'
import { useFrame } from '@react-three/fiber'

import { easing } from 'maath'

function LandingPage() {

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    return windowDimensions;
  }
  
  const { height, width } = useWindowDimensions();
  console.log(height, width)

  if (width>500){
    useFrame((state, delta) => {
      // ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
      // state.events.update() // Raycasts every frame rather than on pointer-move
      easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
      state.camera.lookAt(0, 0, 0) // Look at center
      console.log("Working")
    })
  }


  return (
    <>
      <PerspectiveCamera makeDefault fov={100} position={[0, 0, 11]} />
      <OrbitControls enableZoom={false} enableDamping={false} enablePan={false} enableRotate={false} />
  
      <spotLight
        intensity={80}
        angle={1.2}
        penumbra={0.5}
        position={[0, -1, 10]}
        castShadow
        shadow-bias={-0.0001}
      />
      <ALogo className="logo" />
      <ShowreelVideo />
      <WorkScroller />
      <FooterModel />

    </>
  )
}

export default LandingPage