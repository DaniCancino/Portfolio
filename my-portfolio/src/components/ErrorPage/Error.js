import React from 'react';
import error from '../../assets/error.png';
import './Error.css';

const Error =() =>{
    return(
        <div className='Error'>
            <div className='error-title'>ERROR 404</div>
            <spam>PAGE NOT FOUND</spam>
            <img src={error} alt='Error 404' className='error-img'></img>
        </div>
    )
}

export default Error;