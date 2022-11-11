import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages:[
            {id: 1, value: "C", xp:5},
            {id: 3, value: "Java", xp:4},
            {id: 4, value: "PHP", xp:3},
            {id: 5, value: "HTML", xp:5},
            {id: 6, value: "CSS", xp:5},
        ],

        frameworks:[
            {id: 1, value: "NuxtJS", xp:2.5},
            {id: 2, value: "ReactJS", xp:2.25},
            {id: 3, value: "NodeJS", xp:2.25},
            {id: 4, value: "Laravel", xp:2.25},
            {id: 4, value: "Bootstrap", xp:3},
        ],
    }

    render() {

        let {languages, frameworks} = this.state;

        return (
            <div className='languagesFrameworks'>
                <ProgressBar 
                    languages={languages}
                    className="languagesDisplay"
                    title="langages"
                />
                <ProgressBar 
                    languages={frameworks}
                    title="frameworks & bibliothèques"
                    className="frameworksDisplay"
                />
            </div>
        );
    }
}

export default Languages;