import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <div className='home'>
           <Navigation />

            <div className='homeContent'>
                <div className='content'>
                    <h1>Mustapha Ait Hamou</h1>
                    <h2>Développeur Full-Stack</h2>
                    <div className='pdf'>
                        <a href='./media/CV.pdf' target="_blank">Télécharger le CV</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;