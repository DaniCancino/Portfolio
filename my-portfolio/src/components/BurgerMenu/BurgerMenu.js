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
                        <div className='inicio-bckg'>INICIO</div>
                    </Link>

                    <Link to='about' className='Link' onClick={() => setState(false)}>
                        <FaRegUser /> Acerca
                        <div className='acerca-bckg'>ACERCA</div>
                    </Link>

                    <Link to='skills' className='Link' onClick={() => setState(false)}>
                        <FaRegHandSpock /> Habilidades
                        <div className='habilidades-bckg'>HABILIDADES</div>
                    </Link>

                    <Link to='proyectos' className='Link' onClick={() => setState(false)}>
                        <FaRegFolder /> Proyectos
                        <div className='proyectos-bckg'>PROYECTOS</div>
                    </Link>

                    <Link to='contacto' className='Link' onClick={() => setState(false)}>
                        <FaRegEnvelope /> Contacto
                        <div className='contacto-bckg'>CONTACTO</div>
                    </Link>
            </div>
        </div>
    )
}

export default BurgerMenu;