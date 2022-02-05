import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Intérêts</h3>
        <ul>
            <li className='hobby'>
                <i className='fas fa-running'></i>
                <span>Course à pied</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-bike'></i>
                <span>Vélo</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-uniform-martial-arts'></i>
                <span>Judo</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-film'></i>
                <span>musculation</span>
            </li>
            <li className='hobby'>
                <i className='fab fa-btc'></i>
                <span>Crypto-monnaies</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-rocket'></i>
                <span>Astronomie</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-book'></i>
                <span>Histoire</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-film'></i>
                <span>Cinéma</span>
            </li>
            <li className='hobby'>
                <i className='fas fa-music'></i>
                <span>Musique</span>
            </li>
        </ul>
        </div>
    );
};

export default Hobbies;