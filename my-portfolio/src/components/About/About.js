import React from 'react';
import './About.css';
import foto from '../../assets/foto.jpg'
import cinta from '../../assets/cinta.png'
import {motion} from 'framer-motion'
import Typist from 'react-typist';
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

      const text = '<p>Hola me llamo Daniel, soy Venezolano actualmente radico en Argentina. Poseo una gran pasión al arte, diseño y junto a esto me gusta mucho la lógica y resolver acertijos, soy Full Stack Developer pero me inclino más por el Frontend ya que es una rama de la programación web que une mis pasiones. Además un desarrollador atento a los detalles y aplico mis maximos conocimientos en cada proyecto para poder dar el mayor rendimiento de mi y entregar un proyecto fuera de serie, me mantengo siempre en constante aprendizaje para crecer cada día personal y profesionalmente.</p>'

    return(
        <motion.div 
            className='About'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >

            <div className='container-code'>
                <div className='code'>
                    <div className='code-header'>
                        <div className='circle-container'>
                            <div className='circle-red'>x</div>
                            <div className='circle-yellow'>-</div>
                            <div className='circle-green'>+</div>
                        </div>
                    </div>
                    <Typist className='about-description'>
                        <Typist.Delay ms={1000} />
                        {text}
                    </Typist>
                </div>
                <div className='marco-exterior'>
                    <img src={cinta} alt='cinta' className='cinta'></img>
                    <img src={cinta} alt='cinta' className='cinta-dos'></img>
                    <div className='marco-interior'>
                            <img src={foto} alt='foto about' className='foto-about'></img>
                    </div>
                </div>
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