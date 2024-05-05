// // https://cydstumpel.nl/

// import * as THREE from 'three'
// import { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
// import { easing } from 'maath'
// import '../components/utils'

// const WorkScroller = () => (
//   <Canvas camera={{ position: [0, 0, 100], fov: 15 }}>
//     <fog attach="fog" args={['#a79', 8.5, 12]} />
//     <ScrollControls pages={4} infinite>
//       <Rig rotation={[0, 0, 0.15]}>
//         <Carousel />
//       </Rig>
//       <Banner position={[0, -0.15, 0]} />
//     </ScrollControls>
//     <Environment preset="dawn" background blur={0.5} />
//   </Canvas>
// )

// function Rig(props) {
//   const ref = useRef()
//   const scroll = useScroll()
//   useFrame((state, delta) => {
//     ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
//     state.events.update() // Raycasts every frame rather than on pointer-move
//     easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
//     state.camera.lookAt(0, 0, 0) // Look at center
//   })
//   return <group ref={ref} {...props} />
// }

// function Carousel({ radius = 1.4, count = 8 }) {
//   return Array.from({ length: count }, (_, i) => (
//     <Card
//       key={i}
//       url={`/img${Math.floor(i % 10) + 1}_.jpg`}
//       position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
//       rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
//     />
//   ))
// }

// function Card({ url, ...props }) {
//   const ref = useRef()
//   const [hovered, hover] = useState(false)
//   const pointerOver = (e) => (e.stopPropagation(), hover(true))
//   const pointerOut = () => hover(false)
//   useFrame((state, delta) => {
//     easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
//     easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
//     easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
//   })
//   return (
//     <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
//       <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
//     </Image>
//   )
// }

// function Banner(props) {
//   const ref = useRef()
//   const texture = useTexture('/agnas-logo.png')
//   texture.wrapS = texture.wrapT = THREE.RepeatWrapping
//   const scroll = useScroll()
//   useFrame((state, delta) => {
//     ref.current.material.time.value += Math.abs(scroll.delta) * 4
//     ref.current.material.map.offset.x += delta / 2
//   })
//   return (
//     <mesh ref={ref} {...props}>
//       <cylinderGeometry args={[1.6, 1.6, 0.14, 128, 16, true]} />
//       <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
//     </mesh>
//   )
// }

// export default WorkScroller;

// https://cydstumpel.nl/

import * as THREE from 'three'
import { useLayoutEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Image, Environment, ScrollControls, useScroll, useTexture } from '@react-three/drei'
import { easing } from 'maath'
import '../components/utils'
import gsap from 'gsap'

export default function WorkScroller () {
  // const ref = useRef()
  // const scroll = useScroll()
  // const tl = useRef();


  // useFrame(() => {
  //   tl.current.seek(scroll.offset * tl.current.duration());
  // });

  // useLayoutEffect(() => {
  //   tl.current = gsap.timeline();

  //   // LOGO ANIMATION
  //   tl.current.to(
  //     ref.current.position,
  //     {
  //       duration: 100,
  //       y: 20,
  //     },
  //     0
  //   );
  // }, []);
  return(
    <>
          <Rig rotation={[0, 0, 0.15]} scale={4} position={[0, -140, -7]}>
            <Carousel />
          </Rig>
          {/* <Banner position={[0, -140, 8]} /> */}
    </>
  )
}

function Rig(props) {
  const ref = useRef()
  const scroll = useScroll()
  const tl = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
    state.events.update() // Raycasts every frame rather than on pointer-move
    easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y + 1.5, 10], 0.3, delta) // Move camera
    state.camera.lookAt(0, 0, 0) // Look at center
    tl.current.seek(scroll.offset * tl.current.duration());
  })
  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // LOGO ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 1,
        y: 0.5,
      },
      "<200"
    );
    // tl.current.to(
    //   ref.current.position,
    //   {
    //     duration: 8,
    //     z: -7,
    //   },
    //   0
    // );


    tl.current.to(
      ref.current.position, 
      { 
        y: 35, 
        duration: 7 
      }, 
      ">4"
    );
  }, []);
  return <group ref={ref} {...props} />
}

function Carousel({ radius = 3.4, count = 8 }) {
  return Array.from({ length: count }, (_, i) => (
    <Card
      key={i}
      url={`/img${Math.floor(i % 10) + 1}_.jpg`}
      position={[Math.sin((i / count) * Math.PI * 2) * radius, 0, Math.cos((i / count) * Math.PI * 2) * radius]}
      rotation={[0, Math.PI + (i / count) * Math.PI * 2, 0]}
    />
  ))
}

function Card({ url, ...props }) {
  const ref = useRef()
  const [hovered, hover] = useState(false)
  const pointerOver = (e) => (e.stopPropagation(), hover(true))
  const pointerOut = () => hover(false)
  useFrame((state, delta) => {
    easing.damp3(ref.current.scale, hovered ? 1.15 : 1, 0.1, delta)
    easing.damp(ref.current.material, 'radius', hovered ? 0.25 : 0.1, 0.2, delta)
    easing.damp(ref.current.material, 'zoom', hovered ? 1 : 1.5, 0.2, delta)
  })
  return (
    <Image ref={ref} url={url} transparent side={THREE.DoubleSide} onPointerOver={pointerOver} onPointerOut={pointerOut} {...props}>
      <bentPlaneGeometry args={[0.1, 1, 1, 20, 20]} />
    </Image>
  )
}

function Banner(props) {
  const ref = useRef()
  const texture = useTexture('/agnas-logo.png')
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  const scroll = useScroll()
  const tl = useRef();
  useFrame((state, delta) => {
    ref.current.material.time.value += Math.abs(scroll.delta) * 4
    ref.current.material.map.offset.x += delta / 2
    tl.current.seek(scroll.offset * tl.current.duration());
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    // LOGO ANIMATION
    tl.current.to(
      ref.current.position,
      {
        duration: 100,
        y: 0,
      },
      0
    );
    tl.current.to(
      ref.current.position,
      {
        duration: 100,
        z: -5,
      },
      0
    );
  }, []);

  return (
    <mesh ref={ref} {...props}>
      <cylinderGeometry args={[10.6, 10.6, 1, 128, 16, true]} />
      <meshSineMaterial map={texture} map-anisotropy={16} map-repeat={[30, 1]} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  )
}
