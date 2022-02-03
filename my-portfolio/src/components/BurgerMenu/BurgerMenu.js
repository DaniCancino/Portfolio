import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { FaBars, FaTimes } from "react-icons/fa";
import './BurgerMenu.css';
import {motion} from 'framer-motion'


const BurgerMenu = () =>{

    const [state, setState] = useState(false)
    return(
        <div className={state ? 'menu-extended' : 'BurgerMenu'}>
            <FaBars className='bars-menu' onClick={() => setState(true)}/>
            <div className='Links-header'>
                    <FaTimes className='close-menu' onClick={() => setState(false)}/>
                    <Link  to= '/' className='Link'>Inicio</Link>
                    <Link to='about' className='Link'>Acerca</Link>
                    <Link to='skills' className='Link'>Habilidades</Link>
                    <Link to='proyectos' className='Link'>Proyectos</Link>
                    <Link to='contacto' className='Link'>Contacto</Link>
            </div>
        </div>
    )
}

export default BurgerMenu;