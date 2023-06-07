import React from 'react';
import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import {motion} from 'framer-motion';
function home() {
  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exist={{opacity: 0}}
    transition={{duration: 0.5}}
    >
     <Veggie/>
     <Popular/>
    </motion.div>
  )
}

export default home;
