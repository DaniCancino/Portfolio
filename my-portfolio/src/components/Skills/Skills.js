import React from 'react';
import './Skills.css'
import {motion} from 'framer-motion'

const Skills = () =>{
    return(
        <motion.div 
            className='Skills'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >
            <h3>Mis Habilidades</h3>
        </motion.div>
    )
}

export default Skills