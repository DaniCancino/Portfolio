import React from 'react';
import './Contact.css';
import {motion} from 'framer-motion'
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Contact =() =>{
    return(
        <motion.div
            className='Contact'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >

            <motion.div
                className='contact-title'
                variants={{hidden: { opacity: 0 },
                            show: {
                                opacity: 0.5,
                                transition: {
                                duration: 3
                                }
                            }
                }}
                initial="hidden"
                animate="show"
            >
                CONTACTAME
            </motion.div>
            
            <Link to='/projects'><FaAngleUp className= 'up-arrow'/></Link>
        </motion.div>
    )
}

export default Contact;