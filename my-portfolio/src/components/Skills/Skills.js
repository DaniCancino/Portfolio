import React from 'react';
import './Skills.css'
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Skills = () =>{

    return(
        <motion.div 
            className='Skills'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >
            <motion.div
                className='skills-title'
                variants={{hidden: { opacity: 0 },
                            show: {
                                opacity: 0.5,
                                transition: {
                                duration: 3
                                }
                            }
                }}
                initial="hidden"
                animate="show"
            >
                     MIS HABILIDADES
            </motion.div>

            <div className='skills-container'>
                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>HTML/CSS</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='html-progress'>95%</div>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                 animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.85, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>ADOBE PS</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='css-progress'>90%</div>
                    </div>
                </motion.div>

                <motion.div
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.7, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>JAVASCRIPT</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='js-progress'>87%</div>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.55, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>REACT</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='react-progress'>85%</div>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.4, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>NODE JS</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='node-progress'>75%</div>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.25, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <spam>POSTGRES SQL</spam>
                    </div>
                    <div className='progress-bar'>
                        <div className='post-progress'>70%</div>
                    </div>
                </motion.div>
                
            </div>

            <Link to='/about'><FaAngleUp className= 'up-arrow'/></Link>
            <Link to='/projects'><FaAngleDown className= 'down-arrow'/></Link>
        </motion.div>
    )
}

export default Skills