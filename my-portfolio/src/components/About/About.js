import React from 'react';
import './About.css';
import foto from '../../assets/foto.jpg'
import cinta from '../../assets/cinta.png'
import {motion} from 'framer-motion'
import Typist from 'react-typist';


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

      const text = '<p>En la fase de maquetación de un documento o una página web o para probar un tipo de letra es necesario visualizar el aspecto del diseño. En este momento se necesita un contenido sobre el que aplicar el formato para obtener esta muestra. Cualquier texto puede utilizarse con este cometido, puesto que lo importante es el aspecto no el significado y será reemplazado en la versión final.</p>'

    return(
        <div className='About'>
            <motion.h3 
                initial={{x: '-100vw'}} 
                animate={{x: 0}}
                transition={{type: 'Spring', duration: 0.8, bounce: 1, stiffness: 50 }}
                className='about-title'
            > 
                ACERCA DE MI
            </motion.h3>

            <div className='container-code'>
                <motion.div className='code'
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
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
                </motion.div>
                <motion.div className='marco-exterior'
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <img src={cinta} alt='cinta' className='cinta'></img>
                    <img src={cinta} alt='cinta' className='cinta-dos'></img>
                    <div className='marco-interior'>
                            <img src={foto} alt='foto about' className='foto-about'></img>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About;