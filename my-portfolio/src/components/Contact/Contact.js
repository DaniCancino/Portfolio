import React, {useState} from 'react';
import './Contact.css';
import {motion} from 'framer-motion'
import { FaAngleUp, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import {Link} from 'react-router-dom';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import ClipLoader from "react-spinners/ClipLoader";

const Contact =() =>{
    const initialState ={
        name: '',
        email: '',
        subject: '',
        message: ''

    }

    const [form, setForm] = useState(initialState);
    const [load, setLoad] = useState(false);

    const handleReset =() =>{
        setForm(initialState)
    }

    const handleChange =(e) =>{
        setForm({
            ...form,
            [e.target.name] :e.target.value
        })
    }



  const sendEmail = (e) => {
    e.preventDefault();
    setLoad(true)
    if(!form.name || !form.email || !form.subject || !form.message){
        setLoad(false)
        swal("Error", "Asegurate de llenar todos lo campos correctamente.", "error");
    }else{
        emailjs.sendForm('service_5rld747', 'template_k4yr77r', form.current, 'user_XWEOmi1dwZVxRyxRY2VO5')
        .then((result) => {
            setLoad(false)
            console.log(result.text);
            swal("Email enviado", "Me pondré en contacto contigo lo mas pronto posible.", "success");
            handleReset()
        }, (error) => {
            swal("Error", error.text, "error");
            console.log(error.text);
        });
    }
  };


    return(
        <motion.div
            className='Contact'
            initial={{scaleY: 0}}
            animate={{scaleY:1}}
            exit={{scaleY: 0}}
            transition={{duration:0.3}}
        >
            {load ? <div className="loader" ><ClipLoader size={50} color="#01D7B7" loading={load}/></div> : ''}
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
                CONTÁCTAME
            </motion.div>
            <div className='contact-container'>
                <form className='form-contact' onSubmit={sendEmail} ref={form}>
                    <input 
                        type='text'
                        name='name'
                        className='name'
                        value={form.name}
                        placeholder='Nombre'
                        autocomplete= 'off'
                        onChange={handleChange}
                    ></input>

                    <input
                        type='email'
                        name='email'
                        className='email'
                        value={form.email}
                        autocomplete= 'off'
                        placeholder='Email'
                        onChange={handleChange}
                    ></input>

                    <input
                        type='text'
                        name='subject'
                        className='subject'
                        value={form.subject}
                        placeholder='Asunto'
                        autocomplete= 'off'
                        onChange={handleChange}
                    ></input>

                    <textarea
                        name='message'
                        className='message'
                        value={form.message}
                        placeholder='Message'
                        autocomplete= 'off'
                        onChange={handleChange}
                    ></textarea>

                    <button type='submit' className='submit-button'>Enviar</button>
                </form>
                <div className='socials-container'>
                    <h3>Mis redes:</h3>
                    <div className='socials'>
                        <motion.a 
                            href='https://www.linkedin.com/in/danicancino-dev/'
                            target='_blank'
                            rel="noreferrer"
                            className='social-links'
                            initial={{x: '100vw'}}
                            animate={{x: 0}}
                            transition={{type: 'Spring', duration: 0.5, bounce: 1, stiffness: 50 }}
                        >
                            <FaLinkedin />
                        </motion.a>

                        <motion.a 
                            href='https://github.com/DaniCancino'
                            target='_blank'
                            rel="noreferrer"
                            className='social-links'
                            initial={{x: '100vw'}}
                            animate={{x: 0}}
                            transition={{type: 'Spring', duration: 0.75, bounce: 1, stiffness: 50 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a 
                            href='https://twitter.com/ziete_77'
                            target='_blank'
                            rel="noreferrer"
                            className='social-links'
                            initial={{x: '100vw'}}
                            animate={{x: 0}}
                            transition={{type: 'Spring', duration: 1, bounce: 1, stiffness: 50 }}
                        >
                            <FaTwitter />
                        </motion.a>
                    </div>
                </div>
            </div>
            <Link to='/projects'><FaAngleUp className= 'up-arrow'/></Link>
        </motion.div>
    )
}

export default Contact;