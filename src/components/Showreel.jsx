import React from 'react'
import Marquee from './Marquee'

const Showreel = () => {
  return (
    <div className='showreel w-full h-screen relative'>
        <div className='videodiv md:w-[60rem] md:h-[36rem] w-[19rem] h-[11rem]  aspect-video overflow-hidden absolute 
        top-[46%] left-1/2 -translate-x-1/2 -translate-y-[50%]'>
            <video autoPlay muted loop className='w-full h-full absolute top-1/2 left-1/2 scale-[2] -translate-x-1/2 -translate-y-1/2' src='https://advanced.team/image/project/Showreel/showreel_preview.mp4' type="video/mp4"></video>
        </div>

        <div className='marquee absolute top-1/2 left-1/2 -translate-x-1/2 
        -translate-y-[60%] '>
            <Marquee/>
        </div>

        <div className='Fullvideo h-[5.5rem] w-[5.5rem] rounded-full bg-red-500 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-[50%]'>
            <h1 className='text-white text-sm text-center py-6'>Full Video</h1>
        </div>
    </div>
  )
}

export default Showreel