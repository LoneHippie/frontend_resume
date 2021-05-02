import React from 'react';

import './../styles/projectCards.scss';

const projectCards = () => {

    return (
        <section className="project-container">

            <div className="project-card">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-bnf.png'} alt="BNF laptop mockup"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-bnf.png'} alt="BNF tablet mockup"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-bnf.png'} alt="BNF phone mockup"></img>

                    <span className="project-card__mockups--title">BNF MVP</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A mockup for Bear Necessities Fitness, an online workout subscription service made with vanilla Javascript, HTML and SCSS
                    </p>

                    <div className="project-card__info--tech">
                        <img src={'static/html5.svg'} alt="HTML5" title="HTML5"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={'static/javascript.svg'} alt="Javascript" title="Javascript"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://lonehippie.github.io/bnf_mvp/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/bnf_mvp">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-dd.png'} alt="Drinkdex laptop mockup"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-dd.png'} alt="Drinkdex tablet mockup"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-dd.png'} alt="Drinkdex phone mockup"></img>

                    <span className="project-card__mockups--title">Drinkdex</span>
                </div>

                <div className="project-card__info">

                    <p className="text-block">
                        A MERN stack web application for creating, saving and sharing cocktail recipes. Gets data and authenticates users via a home made API
                    </p>

                    <div className="project-card__info--tech tech-long">
                        <img src={'static/react.svg'} alt="ReactJS" title="ReactJS"></img>
                        <img src={'static/sass.svg'} alt="Sass/SCSS" title="Sass/SCSS"></img>
                        <img src={'static/node-js.svg'} alt="NodeJS" title="NodeJS"></img>
                        <img src={'static/mongodb.svg'} alt="MongoDB" title="MongoDB"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://drinkdex-v1.herokuapp.com/">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/drinkdex">Repo</a>
                    </div>

                </div>

            </div>

            <div className="project-card">

                <div className="project-card__mockups">
                    <img className="project-card__mockups--laptop" src={'static/mockup-laptop-oregon.png'} alt="Oregon laptop mockup"></img>
                    <img className="project-card__mockups--tablet" src={'static/mockup-tablet-oregon.png'} alt="Oregon tablet mockup"></img>
                    <img className="project-card__mockups--phone" src={'static/mockup-phone-oregon.png'} alt="Oregon phone mockup"></img>

                    <span className="project-card__mockups--title">Oregon Hikes</span>
                </div> 

                <div className="project-card__info">

                    <p className="text-block">
                        An older project made for curating hikes around Oregon made with vanilla Javascipt, HTML and CSS    
                    </p>

                    <div className="project-card__info--tech">
                        <img src={'static/html5.svg'} alt="HTML5" title="HTML5"></img>
                        <img src={'static/css3.svg'} alt="CSS" title="CSS"></img>
                        <img src={'static/javascript.svg'} alt="Javascript" title="Javascript"></img>
                    </div>

                    <div className="project-card__info--buttons">
                        <a target="_blank" rel="noreferrer" href="https://lonehippie.github.io/oregon/index.html">Live Site</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/LoneHippie/oregon">Repo</a>
                    </div>

                </div>

            </div>

        </section>
    )
};

export default projectCards;
