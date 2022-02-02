import React from 'react';
import './Header.css'
import logo from '../../assets/logocompleto.png'

const Header = () =>{
    return(
        <div className='Header'>
            <img src={logo} alt='Logo Daniel Cancino' className='Logo'></img>
            <ul className='Links-header'>
             <li className='Link'>Inicio</li>
             <li className='Link'>Acerca</li>
             <li className='Link'>Habilidades</li>
             <li className='Link'>Proyectos</li>
             <li className='Link'>Contacto</li>
            </ul>
        </div>
    )
}

export default Header;