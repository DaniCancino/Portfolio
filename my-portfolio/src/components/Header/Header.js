import React from 'react';
import './Header.css'
import logo from '../../assets/logocompleto.png'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <div className='Header'>
            <img src={logo} alt='Logo Daniel Cancino' className='Logo'></img>
            <div className='Links-header'>
                <Link  to= '/' className='Link'>Inicio</Link>
                <Link to='about' className='Link'>Acerca</Link>
                <Link to='skills' className='Link'>Habilidades</Link>
                <Link to='proyectos' className='Link'>Proyectos</Link>
                <Link to='contacto' className='Link'>Contacto</Link>
            </div>
            
        </div>
    )
}

export default Header;