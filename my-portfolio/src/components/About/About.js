import React, {useEffect} from 'react';
import './About.css';
import foto from '../../assets/foto.jpg'
import cinta from '../../assets/cinta.png'
import Typist from 'react-typist';
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'


const About = () =>{

    const {ref, inView} = useInView({
        threshold: 0.3

    });
    const animation = useAnimation()

    useEffect(()=>{
        console.log('Value of intersection', inView)

        if(inView){
            animation.start({
                x : 0,
                transition:{
                    type: 'Spring', duration: 1, bounce: 1, stiffness: 50
                }
            })
        } else{
            animation.start({
                x: '-100vw'
            })
        }
    }, [inView])

    const element = 'En la fase de maquetación de un documento o una página web o para probar un tipo de letra es necesario visualizar el aspecto del diseño. En este momento se necesita un contenido sobre el que aplicar el formato para obtener esta muestra. Cualquier texto puede utilizarse con este cometido, puesto que lo importante es el aspecto no el significado y será reemplazado en la versión final.'

    return(
        <div className='About' ref={ref}>
            <h3 className='about-title'> ACERCA DE MI</h3>
            <div className='container-code'>
                <motion.div className='code' animate={animation} >
                    <div className='code-header'>
                        <div className='circle-container'>
                            <div className='circle-red'>x</div>
                            <div className='circle-yellow'>-</div>
                            <div className='circle-green'>+</div>
                        </div>
                    </div>
                    {inView ? <p className='about-description'>{element}</p> : ''}
                </motion.div>
                    <img src={cinta} alt='cinta' className='cinta'></img>
                <div className='marco-exterior'>
                    <div className='marco-interior'>
                            <img src={foto} alt='foto about' className='foto-about'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;