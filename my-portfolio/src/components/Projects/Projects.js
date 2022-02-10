import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Card from '../Cards/Card';
import share from '../../assets/shareit.png';
import recipes from '../../assets/recipesApp.jpg'


const shareit = ['html', 'SASS', 'JavaScript', 'React', 'Redux', 'Firebase', 'ExpressJS', 'PostgresSQL', 'Sequelize']
const recipesApp = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'ExpresJS', 'PostgresSQL', 'Sequelize']

const Projects =({}) =>{
    return(
        <motion.div 
            className='Projects'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >

            <motion.div 
                className='projects-title'
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
                    MIS PROYECTOS
            </motion.div>
            <div className='projects-container'>
                <a 
                    href='https://share-it-tawny.vercel.app/'
                    target='_blank'
                    rel="noreferrer"
                >
                    <Card contentPicture={share} framework={shareit}/>
                </a>
                <a 
                    href='https://www.google.com/'
                    target='_blank'
                    rel="noreferrer"
                >
                    <Card contentPicture={recipes} framework={recipesApp}/>
                </a>
            </div>

            <Link to='/skills'><FaAngleUp className= 'up-arrow'/></Link>
            <Link to='/hire'><FaAngleDown className= 'down-arrow'/></Link>
        </motion.div>
    )
}

export default Projects;