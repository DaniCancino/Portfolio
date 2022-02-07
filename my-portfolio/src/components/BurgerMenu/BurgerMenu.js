import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { FaBars, FaTimes, FaRegEnvelope, FaRegUser, FaRegFolder, FaRegHandSpock} from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import './BurgerMenu.css';

const BurgerMenu = () =>{

    const [state, setState] = useState(false)
    return(
        <div className={state ? 'menu-extended' : 'BurgerMenu'}>
            <FaBars className='bars-menu' onClick={() => setState(true)}/>
            <div className='Links-header'>
                    <FaTimes className='close-menu' onClick={() => setState(false)}/>

                    <Link  to= '/' className='Link' onClick={() => setState(false)}>
                        <AiOutlineHome /> Inicio
                    </Link>
                        <div className='inicio-bckg'>INICIO</div>

                    <Link to='about' className='Link' onClick={() => setState(false)}>
                        <FaRegUser /> Acerca
                    </Link>
                        <div className='acerca-bckg'>ACERCA DE MI</div>

                    <Link to='skills' className='Link' onClick={() => setState(false)}>
                        <FaRegHandSpock /> Habilidades
                    </Link>
                        <div className='habilidades-bckg'>HABILIDADES</div>

                    <Link to='proyectos' className='Link' onClick={() => setState(false)}>
                        <FaRegFolder /> Proyectos
                    </Link>
                        <div className='proyectos-bckg'>PROYECTOS</div>

                    <Link to='contacto' className='Link' onClick={() => setState(false)}>
                        <FaRegEnvelope /> Contacto
                    </Link>
                        <div className='contacto-bckg'>CONTACTO</div>
            </div>
        </div>
    )
}

export default BurgerMenu;