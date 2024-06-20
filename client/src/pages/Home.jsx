import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from "valtio";
import state from '../store';
import CustomButton from '../components/CustomButton';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'


const Home = () => {
 const snap = useSnapshot(state);
  return (
   <AnimatePresence>
     {snap.intro && (
       <motion.section className='home' {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img 
            src='./threejs.png'
            alt=''logo
            className='w-8 h-8 object-contain'/>
          </motion.header>

          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text'>
                LET'S <br className='xl:block hidden'/> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContainerAnimation} className='flex flex-col gap-5'>
              <p className='max-w-md text-gray-800 text-normal text-base'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime saepe est at debitis dolorum maiores cum cumque non, aliquid vitae in, <strong>psum omnis libero.</strong>{" "}ipsum omnis libero quasi. Eligendi molestias omnis fugiat et.
              </p>

              <CustomButton 
                type="filled"
                title="Customize it"
                handleClick={() => state.intro = false}
                customStyles= "w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
       </motion.section>
     )}
   </AnimatePresence>
  )
}

export default Home
