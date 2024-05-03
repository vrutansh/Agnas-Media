import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, Preload, Scroll, ScrollControls, Text } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'

import LandingPage from './components/LandingPage'

function App() {
  return (
    <>
          <Canvas style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: '#000000',
          }}>
              <EffectComposer>
                      <Fluid
                          radius={0.5}
                          curl={1.9}
                          swirl={4}
                          distortion={0.40}
                          force={1.1}
                          pressure={0.80}
                          densityDissipation={0.96}
                          velocityDissipation={1.0}
                          intensity={2}
                          rainbow={true}
                          blend={5.0}
                          // showBackground={true}
                          // backgroundColor='#a7958b'
                          // fluidColor='#cfc0a8'
                      />
                  </EffectComposer>
            <ScrollControls pages={4}>
                <Scroll html style={{ width: '100%' }}>
                  <h1 style={{ position: 'absolute', top: `14vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Agnas Media&#174;</h1>
                  <h1 style={{ position: 'absolute', top: `25vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Digital Design</h1>
                  <h1 style={{ position: 'absolute', top: `36vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>Boutique with Focus</h1>
                  <h1 style={{ position: 'absolute', top: `47vh`, left: '3vw',transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '6em' }}>on Aesthetics</h1>

                  <div style={{ position: 'absolute', top: `8vh`, right: '20vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Portfolio</div>
                  <div style={{ position: 'absolute', top: `8vh`, right: '15vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Agency</div>
                  <div style={{ position: 'absolute', top: `8vh`, right: '10vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Services</div>
                  <div style={{ position: 'absolute', top: `8vh`, right: '5vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>Contact</div>

                  <div style={{ position: 'absolute', top: `86vh`, left: '14vw', transform: `translate3d(0,-100%,0)`, color:'white', fontSize: '1.5em' }}>
                  We pride ourselves on our ability to craft digital products that <br />
                  not only meet but exceed the expectations of our clients. <br />
                  With a wealth of experience and expertise in the field of <br />
                  digital product development, we understand how to design <br />
                  user-friendly interfaces that captivate and engage audiences.

                  </div>
                </Scroll>

                <LandingPage />

                {/* Adding content overlay using react-three APIs */}

                <Preload />
            </ScrollControls>
          </Canvas>
    </>
  )
}

function Typography() {
  const state = useThree()
  const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 12])
  const shared = {letterSpacing: -0.1, color: 'black' }
  return (
    <>
      <Text children="Agnas Media" anchorX="left" position={[-10, 5, 0]} />
      <Text children="be" anchorX="right" position={[width / 2.5, -height * 2, 12]} />
      <Text children="home" position={[0, -height * 4.624, 12]} />
    </>
  )
}

export default App
