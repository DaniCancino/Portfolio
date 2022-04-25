import React from 'react';
import './Skills.css'
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp, FaHtml5, FaCss3Alt, FaSass, FaReact, FaNode } from "react-icons/fa";
import { SiJavascript, SiPostgresql, SiTypescript } from "react-icons/si";
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
                     TECNOLOGÍAS
            </motion.div>

            <div className='skills-container'>
                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <FaHtml5 size={60} className='icons-skills'/>
                        <spam>HTML</spam>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <FaCss3Alt size={60} className='icons-skills'/>
                        <spam>CSS</spam>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <FaSass size={60} className='icons-skills'/>
                        <spam>SASS</spam>
                    </div>
                </motion.div>

                <motion.div
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.7, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <SiJavascript size={60} className='icons-skills' />
                        <spam>JAVASCRIPT</spam>
                    </div>
                </motion.div>
                <motion.div
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.7, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <SiTypescript size={60} className='icons-skills' />
                        <spam>TYPESCRIPT</spam>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.55, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <FaReact size={60} className='icons-skills' />
                        <spam>REACT</spam>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.4, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <FaNode size={60} className='icons-skills' />
                        <spam>NODE JS</spam>
                    </div>
                </motion.div>

                <motion.div 
                    className='progress'
                    initial={{x: '-100vw'}}
                    animate={{x: 0}}
                    transition={{type: 'Spring', duration: 0.25, bounce: 1, stiffness: 50 }}
                >
                    <div className='title-progress'>
                        <SiPostgresql size={60} className='icons-skills' />
                        <spam>POSTGRES SQL</spam>
                    </div>
                </motion.div>
                
            </div>

            <Link to='/about'><FaAngleUp className= 'up-arrow'/></Link>
            <Link to='/projects'><FaAngleDown className= 'down-arrow'/></Link>
        </motion.div>
    )
}

export default Skills