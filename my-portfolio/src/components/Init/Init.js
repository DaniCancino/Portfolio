import React from 'react';
import './Init.css'
import fondo from '../../assets/DobleExpo3.png'
import { AiOutlineCloudDownload } from "react-icons/ai";
import Typist from 'react-typist';
import {motion} from 'framer-motion'

const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 3
      }
    }
  }

const Init = () =>{



    return(
        <div className='Init'>
            <img src={fondo} alt='fondo' className='fondo-img'></img>
            <Typist className='hello'>
                <Typist.Delay ms={2000} />
                {'<h3>HELLO, WORLD.</h3>'}
            </Typist>

            <motion.p 
                className='name-presentation'
                initial={{x: '-100vw'}}
                animate={{x: 0}}
                transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
            >
                Soy Daniel Cancino.
            </motion.p>

            <motion.p 
                className='carrer'
                initial={{x: '100vw'}}
                animate={{x: 0}}
                transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
            >
                | FRONTEND DEVELOPER |
            </motion.p>
            <motion.a 
                href = 'https://drive.google.com/file/d/17KjoH9VDUlm_EB6pfDAeeRDVEyhOn51o/view?usp=sharing'
                className='Download'
                target='_blank'
                rel="noreferrer"
                variants={container}
                initial="hidden"
                animate="show"

            >
                <AiOutlineCloudDownload />
                Descargar CV
            </motion.a>
        </div>
    )
}

export default Init