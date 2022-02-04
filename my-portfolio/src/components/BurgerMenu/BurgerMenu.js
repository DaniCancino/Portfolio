import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { FaBars, FaTimes, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import './BurgerMenu.css';


const BurgerMenu = () =>{

    const [state, setState] = useState(false)
    return(
        <div className={state ? 'menu-extended' : 'BurgerMenu'}>
            <FaBars className='bars-menu' onClick={() => setState(true)}/>
            <div className='Links-header'>
                    <FaTimes className='close-menu' onClick={() => setState(false)}/>
                    <Link  to= '/' className='Link' onClick={() => setState(false)}>Inicio</Link>
                    <Link to='about' className='Link' onClick={() => setState(false)}>Acerca</Link>
                    <Link to='skills' className='Link' onClick={() => setState(false)}>Habilidades</Link>
                    <Link to='proyectos' className='Link' onClick={() => setState(false)}>Proyectos</Link>
                    <Link to='contacto' className='Link' onClick={() => setState(false)}>Contacto</Link>
            </div>
        </div>
    )
}

export default BurgerMenu;