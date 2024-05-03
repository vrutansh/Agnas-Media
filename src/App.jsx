import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, Preload, Scroll, ScrollControls, Text } from '@react-three/drei'
import { EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'

import LandingPage from './components/LandingPage'
import { LandingPageContent } from './components/Content'

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
                      />
                  </EffectComposer>
            <ScrollControls pages={7}>

                <LandingPageContent />

                {/* <ServicePageContent /> */}
                
                <LandingPage />

                <Preload />
            </ScrollControls>
          </Canvas>
    </>
  )
}

export default App