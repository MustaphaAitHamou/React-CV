import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages:[
            {id: 1, value: "C", xp:4},
            {id: 3, value: "Java", xp:3},
            {id: 4, value: "PHP", xp:2},
        ],

        frameworks:[
            {id: 1, value: "NuxtJS", xp:1.85},
            {id: 2, value: "ReactJS", xp:1},
            {id: 3, value: "NodeJS", xp:1},
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