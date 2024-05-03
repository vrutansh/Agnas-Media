import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Html, Scroll, ScrollControls } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'

import LandingPage from './components/LandingPage'
import Showreel from './components/Showreel'
import Marquee from './components/Marquee'

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
              <LandingPage />

              {/* Adding content overlay using react-three APIs */}
              {/* <Scroll>
                <Html transform={false}>
                  <h1 style={{ top: '40vh', left: '20vh', position: 'absolute', color: 'white' }}>Regular overlay Text</h1>
                  <h1 style={{ top: '140vh', left: '20vh', position: 'absolute', color: 'white' }}>Regular overlay Text</h1>
                  <h1 style={{ top: '240vh', left: '20vh', position: 'absolute', color: 'white' }}>Regular overlay Text</h1>
                </Html>
              </Scroll> */}
            </ScrollControls>
          </Canvas>
    </>
  )
}

export default App
