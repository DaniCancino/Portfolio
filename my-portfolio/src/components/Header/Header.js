import React from 'react';
import './Header.css'
import logo from '../../assets/logocompleto.png'
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Header = () =>{
    return(
        <div className='Header'>
            <img src={logo} alt='Logo Daniel Cancino' className='Logo'></img>
            <BurgerMenu />
        </div>
    )
}

export default Header;