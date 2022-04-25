import React from 'react';
import './Projects.css';
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {Link} from 'react-router-dom';
import Card from '../Cards/Card';
import share from '../../assets/shareit.png';
import recipes from '../../assets/recipesApp.jpg'
import quiz from '../../assets/quiz.png'
import kxk from '../../assets/kxk.jpg'


const deploy = {
    share: 'https://share-it-tawny.vercel.app/',
    recipe: 'https://recipes-seven-nu.vercel.app/',
    arch: 'https://kxkportfolio.vercel.app/',
    quiz: 'https://quizgame-dc.vercel.app/'
}

const git = {
    share: 'https://github.com/henry19ag15/finalproject',
    recipe: 'https://github.com/DaniCancino/Recipes-App',
    arch: 'https://github.com/DaniCancino/Kxk-Portfolio',
    quiz: 'https://github.com/DaniCancino/Quiz-Game'
}

const Projects =() =>{
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
                    <Card contentPicture={share} deploy={deploy.share} git={git.share}/>
                    <Card contentPicture={recipes} deploy={deploy.recipe} git={git.recipe}/>
                    <Card contentPicture={kxk} deploy={deploy.arch} git={git.arch}/>
                    <Card contentPicture={quiz} deploy={deploy.quiz} git={git.quiz}/>
            </div>

            <Link to='/skills'><FaAngleUp className= 'up-arrow'/></Link>
            <Link to='/hire'><FaAngleDown className= 'down-arrow'/></Link>
        </motion.div>
    )
}

export default Projects;