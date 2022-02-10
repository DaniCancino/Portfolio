import React from 'react';
import './Card.css';


const Card = ({contentPicture, framework}) =>{
    return(
        <div className='Card'>
            <div className='card-header'>
                <div className='circles'>
                    <div className='red-circle'></div>
                    <div className='yellow-circle'></div>
                    <div className='green-circle'></div>
                </div>
            </div>
            <div className='content-card'>
                <img src={contentPicture} alt='Pictur card' className='image-card'></img>
            </div>
             <div className='framework-container'>
                    {framework ? framework.map(e => <div className='frameworks'>{e}</div>) : ''}
            </div>
        </div>
    )
}

export default Card;