import React from 'react';
import './About.css';
import about from '../../assets/about.png'
import about2 from '../../assets/about2.png'
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {Link} from 'react-router-dom';


const About = () =>{

    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            duration: 3
          }
        }
    }

      const text1 = 'Hola me llamo Daniel, soy Venezolano actualmente radico en Argentina. Poseo una gran pasión al arte, diseño y junto a esto me gusta la lógica y resolver acertijos, soy Full Stack Developer pero me especializo más en tecnlogías y librerías de Frontend ya que es una rama de la programación web que une mis pasiones.'

      const text2 = 'Además un desarrollador atento a los detalles y aplico mis maximos conocimientos en cada proyecto para poder dar el mayor rendimiento de mi y entregar un proyecto fuera de serie, me mantengo siempre en constante aprendizaje para crecer cada día personal y profesionalmente.'


    return(
        <motion.div 
            className='About'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >

            <div className='first-section'>
                <motion.div 
                    className='first-text'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7}}
                >
                        {text1}
                </motion.div>

                <motion.div 
                    className='image-container'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7, delay: 0.3 }}
                >
                    <img src={about} alt='about' className='about-image' />
                </motion.div>
            </div>
            <div className='second-section'>
                <motion.div 
                    className='second-image-container'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7, delay: 0.6}}
                >
                    <img src={about2} alt='about2' className='second-image' />
                </motion.div>

                <motion.div
                    className='second-text'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.7, delay: 0.9}}
                >
                    {text2}
                </motion.div>
            </div>

            <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <Link to='/'><FaAngleUp className= 'up-arrow'/></Link>
                    <Link to='/skills'><FaAngleDown className= 'down-arrow'/></Link>
            </motion.div>
            <motion.div
                className='acerca-img'
                variants={{hidden: { opacity: 0 },
                            show: {
                                opacity: 0.5,
                                transition: {
                                duration: 2.5
                                }
                            }
                }}
                initial="hidden"
                animate="show"
            >ACERCA DE MI</motion.div>
        </motion.div>
    )
}

export default About;