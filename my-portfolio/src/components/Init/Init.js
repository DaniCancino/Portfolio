import React from 'react';
import './Init.css'
import perfil from '../../assets/perfil.png'
import { AiOutlineCloudDownload } from "react-icons/ai";
import Typist from 'react-typist';
import {motion} from 'framer-motion'
import { FaAngleDown } from "react-icons/fa";
import {Link} from 'react-router-dom';

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
        <motion.div 
            className='Init'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >

            <img src={perfil} alt='fondo' className='fondo-img'></img>
            <div className='text-init-container'>
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

                <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='arrow-container'
                >
                <Link to='/about'><FaAngleDown className= 'down-arrow'/></Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Init