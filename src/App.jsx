import React from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { Html, OrbitControls, Preload, Scroll, ScrollControls, Text } from '@react-three/drei'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EffectComposer } from '@react-three/postprocessing'
import { Fluid } from '@whatisjery/react-fluid-distortion'

import LandingPage from './components/LandingPage'
import Portfolio from './components/Portfolio'
import Agency from './components/Agency'
import Contact from './components/Contact'


import "./App.css"

import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';


function App() {
  return (
    <>
          <Cursor cursorSize={0.1} cursorBackgrounColor="#c24040" />
          <Canvas 
          className='canvas'
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            background: 'black',
            // touchAction: 'auto !important'
          }}>
              <EffectComposer>
                <Fluid
                    radius={0.5}
                    curl={4.9}
                    swirl={4}
                    distortion={0.40}
                    force={1.1}
                    pressure={0.80}
                    densityDissipation={0.96}
                    velocityDissipation={1.0}
                    intensity={2}
                    rainbow={true}
                    blend={5.0}
                    showBackground={true}
                    backgroundColor='#000000'
                />
              </EffectComposer>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<LandingPage />}>
                    <Route index element={<Portfolio />} />
                    <Route path='/portfolio' element={<Portfolio />} />
                    <Route path='/agency' element={<Agency />} />
                    <Route path='/contact-us' element={<Contact />} />
                  </Route>
                </Routes>
              </BrowserRouter>
              

              <Preload />
          </Canvas>
    </>
  )
}

export default App
