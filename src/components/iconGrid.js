import React from 'react';

import './../styles/iconGrid.scss';

const iconGrid = () => {

    return (
        <div className="icon-grid">
            <div className="icon-grid--card">
                <img src={'static/html5.svg'} alt="html5"></img>
                <span>HTML</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/css3.svg'} alt="CSS"></img>
                <span>CSS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/javascript.svg'} alt="javascript"></img>
                <span>Javascript</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/sass.svg'} alt="sass"></img>
                <span>Sass/SCSS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/react.svg'} alt="reactJS"></img>
                <span>ReactJS</span> 
            </div>
            <div className="icon-grid--card">
                <img src={'static/node-js.svg'} alt="nodeJS"></img>
                <span>NodeJS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/mongodb.svg'} alt="mongo"></img>
                <span>MongoDB</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/gatsby.svg'} alt="gatsbyJS"></img>
                <span>GatsbyJS</span>
            </div>
            <div className="icon-grid--card">
                <img src={'static/git.svg'} alt="git"></img>
                <span>Git</span>
            </div>
        </div>
    )
};

export default iconGrid;
