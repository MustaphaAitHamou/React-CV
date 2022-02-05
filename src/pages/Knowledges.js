import React from 'react';
import Experience from '../components/knowledges/Experience';
import Languages from '../components/knowledges/Languages';
import OtherSkills from '../components/knowledges/OtherSkills';
import Hobbies from '../components/knowledges/Hobbies';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;