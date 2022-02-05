import React from 'react';
import { NavLink } from 'react-router-dom';

const notAllowed = () => {
    return (
        <div className='notAllowed'>
            <div className='notAllowedContent'>
                <h3>Vous n'êtes pas autorisé à consulter cette page !</h3>
                    <NavLink exact to="/portfolio">
                        <span> Retourner sur la page </span>
                    </NavLink>
            </div>
        </div>
    );
};

export default notAllowed;