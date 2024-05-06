import React from 'react'

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { ALogo } from './ALogo'
import { ShowreelVideo } from './ShowreelVideo'
import WorkScroller from './WorkScroller'
import { FooterModel } from './FooterModel'

function LandingPage() {


  return (
    <>
      <PerspectiveCamera makeDefault fov={100} position={[0, 0, 11]} />
      <OrbitControls enableZoom={false} enableDamping={false} enablePan={false}/>
  
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