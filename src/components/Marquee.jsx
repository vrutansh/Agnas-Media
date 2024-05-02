import React from 'react'
import { motion } from 'framer-motion'
function Marquee() {
  return (
  //  <div className='w-full py-10 text-white'>
  //      <div className='text flex whitespace-nowrap '>

  //        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:2.2}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none'> Showreel -</motion.h1>

  //        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:2.2}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none'> Showreel -</motion.h1>

  //        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:2.2}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none'> Showreel -</motion.h1>

  //        <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:2.2}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none'> Showreel -</motion.h1>
        
  //      </div>

  //  </div>
     
  <div className='w-full py-10 text-white overflow-hidden'>
    <div className='text flex'>

        <motion.h1 initial={{x:"0"}} animate={{x:"-50vw"}} transition={{ease:"linear", repeat: Infinity, duration: 6}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none whitespace-nowrap'> Showreel -</motion.h1>

        <motion.h1 initial={{x:"0"}} animate={{x:"-50vw"}} transition={{ease:"linear", repeat: Infinity, duration: 6}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none whitespace-nowrap'> Showreel -</motion.h1>

        <motion.h1 initial={{x:"0"}} animate={{x:"-50vw"}} transition={{ease:"linear", repeat: Infinity, duration: 6}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none whitespace-nowrap'> Showreel -</motion.h1>

        <motion.h1 initial={{x:"0"}} animate={{x:"-50vw"}} transition={{ease:"linear", repeat: Infinity, duration: 6}} className='text-[2rem] md:text-[5rem] text-gray-300 leading-none whitespace-nowrap'> Showreel -</motion.h1>
        
    </div>
</div>


  )
}

export default Marquee