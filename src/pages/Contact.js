import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { NavLink } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                    <div className='contactBox'>
                        <h1>Contactez-moi</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>
                                    Nice
                                </span>
                            </li>

                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                <CopyToClipboard text='0783477700'>
                                    <span className='clickInput' onClick={() =>{ alert('Téléphone copié !');}}>07 83 47 77 00</span>
                                </CopyToClipboard>
                            </li>

                            <li>
                                <i className='far fa-envelope'></i>
                                <CopyToClipboard text='mustaphaithamou@gmail.com'>
                                    <span className='clickInput' onClick={() =>{ alert('E-mail copié !');}}>mustaphaithamou@gmail.com</span>
                                </CopyToClipboard>
                            </li>
                        </ul>
                    </div>
                    <div className='socialNetwork'>
                        <ul>
                            <a href='https://www.google.com' target='_blank' rel='noopener noreferrer'>
                                <h4>Github</h4>
                                <i className='fab fa-github'></i>
                            </a>
                        </ul>
                    </div>
                </div>

            </div>

    );
    
};

export default Contact;