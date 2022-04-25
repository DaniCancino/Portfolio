import React from 'react';
import './Card.css';
import { AiFillGithub, AiFillEye } from "react-icons/ai";


const Card = ({contentPicture, deploy, git}) =>{
    return(
        <div className='Card'>
            <div className='content-card'>
                <img src={contentPicture} alt='Pictur card' className='image-card'></img>
            </div>
            <div className='soucer-container'>
                <a
                    href={git}
                    target='_blank'
                    rel='noreferrer'
                    className='git-container'
                >
                    <AiFillGithub size={20} />
                    Ver código
                </a>

                <a
                    href={deploy}
                    target='_blank'
                    rel='noreferrer'
                    className='deploy-container'
                >
                    <AiFillEye size={20} />
                    Ver proyecto
                </a>
                                
            </div>
        </div>
    )
}

export default Card;